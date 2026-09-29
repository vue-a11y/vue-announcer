const { describe, it } = require('node:test')
const assert = require('node:assert')
const { createRenderer, createApp, h, provide, ref, isRef } = require('vue')
const { useAnnouncer, ProvideKey, default: install } = require('../dist/announcer.cjs.js')

const createTestRenderer = () => createRenderer({
  patchProp: () => {},
  insert: () => {},
  remove: () => {},
  createElement: () => ({}),
  createText: () => ({}),
  createComment: () => ({}),
  setText: () => {},
  setElementText: () => {},
  parentNode: () => null,
  nextSibling: () => null
})

describe('useAnnouncer', () => {
  describe('when called outside a provider (unprovided fallback)', () => {
    it('does not throw an error when called directly', () => {
      assert.doesNotThrow(() => {
        useAnnouncer()
      })
    })

    it('allows destructuring safe no-op functions without TypeError', () => {
      const { set, reset, polite, assertive, announce, setRouteComplement } = useAnnouncer()

      assert.strictEqual(typeof set, 'function')
      assert.strictEqual(typeof reset, 'function')
      assert.strictEqual(typeof polite, 'function')
      assert.strictEqual(typeof assertive, 'function')
      assert.strictEqual(typeof announce, 'function')
      assert.strictEqual(typeof setRouteComplement, 'function')

      assert.doesNotThrow(() => set('Test message'))
      assert.doesNotThrow(() => reset())
      assert.doesNotThrow(() => polite('Polite announcement'))
      assert.doesNotThrow(() => assertive('Assertive alert'))
      assert.doesNotThrow(() => announce('Generic announce', 'polite'))
      assert.doesNotThrow(() => setRouteComplement('loaded'))
    })

    it('returns a reactive ref for data with default state', () => {
      const { data } = useAnnouncer()

      assert.ok(isRef(data), 'data should be a Vue ref')
      assert.ok(data.value, 'data.value should be defined')
      assert.strictEqual(data.value.content, '')
      assert.strictEqual(data.value.message, '')
      assert.strictEqual(data.value.politeness, 'polite')
      assert.strictEqual(data.value.routeComplement, 'has loaded')
      assert.strictEqual(data.value.router, false)
    })

    it('does not throw when used inside an unprovided component setup (issue #40)', () => {
      const renderer = createTestRenderer()
      let componentResult

      const TestComponent = {
        setup () {
          componentResult = useAnnouncer()
          const { assertive, polite, set, reset, data } = componentResult
          assertive('Important alert')
          polite('Notification')
          set('Custom message')
          reset()
          return () => null
        }
      }

      assert.doesNotThrow(() => {
        renderer.render(h(TestComponent), {})
      })

      assert.ok(componentResult)
      assert.strictEqual(typeof componentResult.assertive, 'function')
      assert.ok(isRef(componentResult.data))
    })
  })

  describe('when called with a provider', () => {
    it('registers announcer plugin and provides all expected methods and state', () => {
      const app = createApp({})
      app.use(install)

      const provided = app._context.provides[ProvideKey]
      assert.ok(provided, 'ProvideKey should be provided')
      assert.ok(isRef(provided.data), 'provided.data should be a ref')
      assert.strictEqual(typeof provided.announce, 'function')
      assert.strictEqual(typeof provided.set, 'function')
      assert.strictEqual(typeof provided.reset, 'function')
      assert.strictEqual(typeof provided.polite, 'function')
      assert.strictEqual(typeof provided.assertive, 'function')
      assert.strictEqual(typeof provided.setRouteComplement, 'function')
    })

    it('returns provided context values in a child component', () => {
      const renderer = createTestRenderer()
      let childResult

      const Child = {
        setup () {
          childResult = useAnnouncer()
          return () => null
        }
      }

      const mockData = ref({
        content: 'custom content',
        message: 'custom message',
        politeness: 'assertive',
        routeComplement: 'custom complement',
        router: false
      })

      const Root = {
        setup () {
          provide(ProvideKey, {
            data: mockData,
            announce: (msg, pol) => `announce:${msg}:${pol}`,
            set: (msg, pol) => `set:${msg}:${pol}`,
            reset: () => 'reset:called',
            polite: msg => `polite:${msg}`,
            assertive: msg => `assertive:${msg}`,
            setRouteComplement: () => {}
          })
          return () => h(Child)
        }
      }

      renderer.render(h(Root), {})

      assert.strictEqual(childResult.data, mockData)
      assert.strictEqual(childResult.set('test'), 'set:test:undefined')
      assert.strictEqual(childResult.reset(), 'reset:called')
      assert.strictEqual(childResult.polite('test'), 'polite:test')
      assert.strictEqual(childResult.assertive('test'), 'assertive:test')
    })
  })

  describe('VueAnnouncer component', () => {
    it('mounts safely in unprovided context without throwing', () => {
      const app = createApp({})
      app.use(install)
      const AnnouncerComp = app._context.components['VueAnnouncer']
      assert.ok(AnnouncerComp, 'VueAnnouncer component should be registered')

      const renderer = createTestRenderer()
      assert.doesNotThrow(() => {
        renderer.render(h(AnnouncerComp), {})
      })
    })
  })
})
