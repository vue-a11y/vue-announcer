import {PluginFunction} from 'vue';

export interface Announcer
{
    data: Record<string, any>;

    set(message: string): void;
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
