import { PluginFunction } from 'vue';

export interface AnnouncerPlugins {
    name: string,
    handler: any
}
export interface Announcer {
    data: Record<string, any>;

    options: Record<string, object>;

    plugins?: AnnouncerPlugins[];

    set(message: string, politeness: string): void;

    polite(message: string): void;
    
    assertive(message: string): void;

    reset(): void;

    setComplementRoute(complementRoute: string): void;

}

declare module 'vue/types/vue' {
    interface Vue
    {
        $announcer: Announcer;
    }
}

declare class VueAnnouncer {
    static install: PluginFunction<never>;
}

export default VueAnnouncer;
