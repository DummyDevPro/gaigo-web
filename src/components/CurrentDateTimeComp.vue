<template>
    <div class="date-time-container text-center">
        <h3>{{ selectedTimeZone }}</h3>
        <h1>{{ date.year }}年{{ date.month }}月{{ date.day }}日</h1>
        <h6 class="py-2">
            <span class="text-bg-primary p-2 rounded">{{ time.hour }}:{{ time.minute }}:{{ time.second }}</span>
        </h6>

        <form @submit.prevent="changeTimeZone">
            <div class="choose-timezone text-center py-2">
                <input class="text-center" list="timezones" v-model="timezoneInput" />

                <datalist id="timezones">
                    <option v-for="tz in matchTimeZone" :key="tz">{{ tz }}</option>
                </datalist>
            </div>

            <button type="submit" class="btn-tz-change">
                (タイムゾーン)変更
            </button>
        </form>
    </div>
</template>
<script>
import { todayFullDate, currentTime, getAllTimeZone } from '@/assets/js/dateUtils'
export default {
    data() {
        return {
            date: {
                year: '----',
                month: '--',
                day: '--'
            },
            time: {
                hour: '--',
                minute: '--',
                second: '--'
            },
            timezoneInput: 'Asia/Tokyo',
            allTimeZone: [],
            matchTimeZone: [],
            selectedTimeZone: 'Asia/Tokyo'
        }
    },
    methods: {
        changeTimeZone() {
            let timeZoneCheck = this.matchTimeZone.filter((tz) => tz.toLowerCase().match(this.timezoneInput.toLocaleLowerCase()))
            if (timeZoneCheck.length > 0) {
                this.selectedTimeZone = timeZoneCheck[0]
            }
        }
    },
    created() {
        this.allTimeZone = getAllTimeZone()

        setInterval(() => {
            this.date = todayFullDate(this.selectedTimeZone)

            this.time = currentTime(this.selectedTimeZone)
        }, 1000);
    },
    watch: {
        timezoneInput: function (value) {
            this.matchTimeZone = this.allTimeZone?.filter((tz) => tz.toLowerCase().includes(value.toLowerCase()))
        }
    }
}
</script>
<style scoped>
.date-time-container {
    padding: 2rem 0;
    background-color: #ffcfdf;
    background-image: linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%);
}

.btn-tz-change {
    padding: .5rem 1rem;
    font-size: .9rem;
    border: none;
    background-color: var(--color-g-web);
    color: white;
    border-radius: 1.5rem;
}

.btn-tz-change:hover {
    background-color: #1f85d4;
}
</style>