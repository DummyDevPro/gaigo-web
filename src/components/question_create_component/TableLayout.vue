<script setup>
defineProps(['testData'])
defineEmits(['update:testData'])
</script>
<template>
    <div class="mb-3 bg-white p-2 rounded">
        <div class="py-2 text-danger">
            <ul class="warning m-0">
                <li>Creates program's test data for users(Examinee).</li>
            </ul>
        </div>
        <!-- <label for="testData" class="form-label fs-5">Test Data</label> -->
        <div class="mb-0 ps-2">
            <label for="testDataHeader" class="form-label me-2">Headings</label>
        </div>
        <div class="mb-3">
            <div v-if="testData.heading.length == 0">
                <i class="bi bi-plus-lg me-2 fs-3 cursor-pointer" @click="generateHeader"></i>
            </div>
            <div class="d-flex ps-3 ms-1 gap-1" v-else-if="testData.heading">
                <div class="input-group" v-for="(__, idx) in testData.heading" :key="idx">
                    <input class="form-control fw-bold" type="text" v-model="testData.heading[idx]">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        :id="idx + 'ID'" aria-expanded="false">
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end" :aria-labelledby="idx + 'ID'">
                        <li>
                            <a @click.prevent="addColumnLeft(idx)" class="dropdown-item" href="#">
                                Add Column Left
                            </a>
                        </li>
                        <li>
                            <a @click.prevent="addColumnRight(idx)" class="dropdown-item" href="#">
                                Add Column Right
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <a @click.prevent="deleteColumn(idx)" class="dropdown-item" href="#">
                                Delete Column
                            </a>
                        </li>
                        <li v-if="idx > 0">
                            <a @click.prevent="deleteColumnLeft(idx)" class="dropdown-item" href="#">
                                Delete Column Left
                            </a>
                        </li>
                        <li v-if="idx != (testData.heading.length - 1)">
                            <a @click.prevent="deleteColumnRight(idx)" class="dropdown-item" href="#">
                                Delete Column Right
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="mb-0 ps-2">
            <label for="testDataBody" class="form-label me-2">Bodies</label>
        </div>

        <div class="d-flex flex-column gap-1" v-if="testData.body.length > 0">
            <div class="d-flex gap-1" v-for="(row, uidx) in testData.body">
                <div class="d-flex align-items-center">
                    <div class="dropstart">
                        <i class="bi bi-three-dots-vertical cursor-pointer" data-bs-toggle="dropdown"
                            aria-expanded="false"></i>
                        <ul class="dropdown-menu">
                            <li>
                                <a @click.prevent="addRowAbove(uidx)" class="dropdown-item" href="#">
                                    Add Row Above
                                </a>
                            </li>
                            <li>
                                <a @click.prevent="addRowBelow(uidx)" class="dropdown-item" href="#">
                                    Add Row Below
                                </a>
                            </li>
                            <li v-if="uidx > 0 || uidx < (testData.body.length - 1)">
                                <hr class="dropdown-divider">
                            </li>
                            <li v-if="uidx > 0 || uidx < (testData.body.length - 1)">
                                <a @click.prevent="deleteRow(uidx)" class="dropdown-item" href="#">
                                    Delete Row
                                </a>
                            </li>
                            <li v-if="uidx > 0">
                                <a @click.prevent="moveAbove(uidx)" class="dropdown-item" href="#">
                                    Move Above
                                </a>
                            </li>
                            <li v-if="uidx != (testData.body.length - 1)">
                                <a @click.prevent="moveBelow(uidx)" class="dropdown-item" href="#">
                                    Move Below
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="input-group" v-for="(__, idx) in row" :key="idx">
                    <input class="form-control" type="text" v-model="row[idx]">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        generateHeader() {
            if (this.testData.body.length == 0) {
                this.testData.body[0] = []
            }

            // add one column each row
            this.testData.heading.push('')
            this.testData.body.forEach(item => {
                item.push('')
            });
        },
        addColumnLeft(pos) {
            if (pos == 0) {
                this.testData.heading.unshift('')
                this.testData.body.forEach(item => {
                    item.unshift('')
                });
            } else {
                this.testData.heading.splice(pos, 0, '')
                this.testData.body.forEach(item => {
                    item.splice(pos, 0, '')
                });
            }
        },
        addColumnRight(pos) {
            if (pos == this.testData.heading.length - 1) {
                this.testData.heading.push('')
                this.testData.body.forEach(item => {
                    item.push('')
                });
            } else {
                this.testData.heading.splice(pos + 1, 0, '')
                this.testData.body.forEach(item => {
                    item.splice(pos + 1, 0, '')
                });
            }
        },
        deleteColumn(pos) {
            if (pos == 0 && (pos == (this.testData.heading.length - 1))) {
                this.testData.heading.shift()
                this.testData.body.shift()
            } else {
                this.testData.heading.splice(pos, 1)
                this.testData.body.forEach(item => {
                    item.splice(pos, 1)
                });
            }
        },
        deleteColumnLeft(pos) {
            this.testData.heading.splice(pos - 1, 1)
            this.testData.body.forEach(item => {
                item.splice(pos - 1, 1)
            });
        },
        deleteColumnRight(pos) {
            this.testData.heading.splice(pos + 1, 1)
            this.testData.body.forEach(item => {
                item.splice(pos + 1, 1)
            });
        },
        addRowAbove(pos) {
            const cols = this.testData.heading.length
            const emptyArr = new Array(cols).fill('')
            if (pos == 0) {
                this.testData.body.unshift(emptyArr)
            } else {
                this.testData.body.splice(pos, 0, emptyArr)
            }
        },
        addRowBelow(pos) {
            const cols = this.testData.heading.length
            const emptyArr = new Array(cols).fill('')
            if (pos == (this.testData.body.length - 1)) {
                this.testData.body.push(emptyArr)
            } else {
                this.testData.body.splice(pos + 1, 0, emptyArr)
            }
        },
        deleteRow(pos) {
            this.testData.body.splice(pos, 1)
        },
        moveAbove(pos) {
            const currentItem = this.testData.body[pos]
            const aboveItem = this.testData.body[pos - 1]

            this.testData.body[pos] = aboveItem
            this.testData.body[pos - 1] = currentItem
        },
        moveBelow(pos) {
            const currentItem = this.testData.body[pos]
            const belowItem = this.testData.body[pos + 1]

            this.testData.body[pos] = belowItem
            this.testData.body[pos + 1] = currentItem
        },
    }
}
</script>