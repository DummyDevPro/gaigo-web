<template>
    <div class="create-schedule">
        <!--  -->
        <div class="row mb-3">
            <div class="col">
                <label for="">
                    <strong>Select School Years</strong>
                </label>
                <select class="form-control" id="">
                    <option v-for="year in schoolYears" :value="year">{{ year }}</option>
                </select>
            </div>

            <div class="col">
                <label for="">
                    <strong>Grade</strong>
                </label>
                <select class="form-control" id="">
                    <option v-for="grade in 2" :value="grade">{{ grade }}</option>
                </select>
            </div>
        </div>

        <!-- Curriculum Period -->
        <div class="mb-3">
            <label for="">
                <strong>Curriculum Period</strong>
            </label>
            <div class="row">
                <div class="col">
                    <label for="">
                        <strong>Start</strong>
                    </label>
                    <input type="number" class="form-control" min="1" max="12">
                </div>

                <div class="col">
                    <label for="">
                        <strong>End</strong>
                    </label>
                    <input type="number" class="form-control" min="1" max="12">
                </div>
            </div>
        </div>

        <div class="mb-3">
            <label for="">
                <strong>Monday</strong>
            </label>
            <div>
                <label for="">
                    <strong>Subject Name</strong>
                </label>
                <input type="text" class="form-control">
            </div>
            <div>
                <label for="">
                    <strong>Teacher Name</strong>
                </label>
                <input type="text" class="form-control">
            </div>
            <div class="row">
                <div class="col">
                    <label for="">
                        <strong>Start Time</strong>
                    </label>
                    <input type="time" value="09:30" min="00:00" max="23:59" step="60" class="form-control">
                </div>
                <div class="col">
                    <label for="">
                        <strong>End Time</strong>
                    </label>
                    <input type="time" value="09:30" min="00:00" max="23:59" step="60" class="form-control">
                </div>
            </div>
        </div>
    </div>
</template>