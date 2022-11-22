<script lang="ts" type="module">
    import type { PageData } from './$types';
    export let data: PageData;

    import { writable } from 'svelte/store';

    const currentFrame = writable("", set => {
      
        let nextIndex = 0
        const update = () => {
            if (nextIndex >= data.urls.length) {
                nextIndex = 0
            }
            set(data.urls[nextIndex].url)

            nextIndex += 1
        }

        // force an update to initialize the store with a non-null value
        update()

        // setup an interval timer to update the store's value repeatedly over time
        const interval = setInterval(update, data.switchTime )
            
        // return unsubscribe callback:
        // it will stop the timer when the store is destroyed
        return () => clearInterval(interval)
    })

</script>

<iframe src={$currentFrame} title="view" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
    Your browser doesn't support iframes
</iframe>