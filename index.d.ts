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
