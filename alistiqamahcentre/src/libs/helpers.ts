import type { Ref } from "vue";
/**
 * Scroll to the ref of the page
 * @param refrence
 * <button @click="scrollToRef">Scroll to top</button>
 */
export function scrollToRef(
    refrence: Ref<HTMLElement | undefined>,
) {
    if (refrence.value) {
        refrence.value.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}