# ARIA live regions

> Using JavaScript, it is possible to dynamically change parts of a page without requiring the entire page to reload — for instance, to update a list of search results on the fly, or to display a discreet alert or notification which does not require user interaction. While these changes are usually visually apparent to users who can see the page, they may not be obvious to users of assistive technologies. ARIA live regions fill this gap and provide a way to programmatically expose dynamic content changes in a way that can be announced by assistive technologies.  
--- [ARIA live regions - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

## Politeness settings

You can use the options `polite`, `assertive` and `off`, if no configuration is defined, the default is `off`.

### polite
It is used in most situations that present new information to users.  
The notification will take place at the next available point, without interruptions.

::: tip Note 
In the [@vue-a11y/announcer plugin](https://github.com/vue-a11y/vue-announcer/blob/master/src/index.js#L8) the default is `polite`
:::

### assertive
It is used in situations where the notification is important enough to communicate it immediately, for example, error messages or alerts.



```javascript
this.$announcer.set('My notification error', 'assertive')
```

### off
Is the default and prevent assistive technology from keeping up with changes.


## Referencies

- [ARIA live regions - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [Using aria-live - Bitsofcode](https://bitsofco.de/using-aria-live/)