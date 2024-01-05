<script setup>
defineProps(['choice'])
defineEmits(['update:choice'])
</script>
<template>
    <div class="bg-white p-2 rounded">
        <div>
            <div class="py-2 text-danger">
                <ul class="warning m-0">
                    <li>Makes sure that you checked your answer option(s).</li>
                </ul>
            </div>
            <div class="input-group mb-1" v-for="(__, idx) in choice.items">
                <div class="input-group-text">
                    <input :value="choice.items[idx].key" :key="'chk' + choice.items[idx].key" v-model="choice.ans"
                        class="form-check-input mt-0" type="checkbox" :required="choice.ans.length == 0">
                </div>
                <input type="text" v-model="choice.items[idx].val" :key="'txt' + choice.items[idx].key" class="form-control"
                    required>
                <button v-if="idx > 2" class="btn btn-outline-secondary" type="button" @click="deleteOption(idx)">
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
            <input type="button" class="btn btn-success form-control" value="Add Option" @click="addNewOption">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addNewOption() {
            const _key = 'opt' + this.choice.items.length + 1
            const _obj = { key: _key, val: '' }
            this.choice.items.push(_obj)
        },
        deleteOption(pos) {
            this.choice.items.splice(pos, 1)
        }
    }
}
</script>

<style scoped></style>