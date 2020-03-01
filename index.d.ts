import { PluginFunction } from 'vue';

export interface Announcer
{
    data: Record<string, any>;

    options: Record<string, object>;

    set(message: string): void;

    reset(): void;

    setComplementRoute(complementRoute: string): void;
}

declare module 'vue/types/vue'
{
    interface Vue
    {
        $announcer: Announcer;
    }
}

declare class VueAnnouncer
{
    static install: PluginFunction<never>;
}

export default VueAnnouncer;
