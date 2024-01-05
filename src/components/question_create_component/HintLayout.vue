<script setup>
defineProps(['hints'])
defineEmits(['update:hints'])
</script>
<template>
    <div class="bg-white p-2 rounded">
        <div class="py-2 text-danger">
            <ul class="warning m-0">
                <li>Inputs hint keyword(s) for problem solving such as for-loop.</li>
            </ul>
        </div>
        <div class="mb-3">
            <!-- <label for="qHintKeys" class="form-label fs-5">Hints</label> -->
            <input v-model="hint" @keydown.enter="hintTyping" class="form-control" name="" id="qHintKeys"
                placeholder="Type hint keys and press enter...">
        </div>
        <div v-if="hints.length != 0" class="form-control mb-3 bg-light d-flex p-2 flex-wrap gap-2">
            <span v-for="(item, index) in hints"
                class="bg-warning p-1 rounded position-relative hint-remove cursor-pointer">
                <i class="bi bi-x-square-fill position-absolute top-0 start-100 translate-middle fs-6 d-none"
                    @click="removeHint(index)"></i>
                {{ item }}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            hint: null
        }
    },
    methods: {
        hintTyping() {
            if (this.hint != null && this.hint.trim() != '')
                this.hints.push(this.hint.trim())

            this.hint = null
        },
        removeHint(hintIndex) {
            this.hints.splice(hintIndex, 1)
        },
    }
} 
</script>