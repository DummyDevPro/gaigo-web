<script setup>
defineProps(['content'])
defineEmits(['update:content'])
</script>

<template>
    <div class="form-control p-2">
        <div class="py-2 text-danger">
            <ul class="warning m-0">
                <li>Writes down a program code such as Java.</li>
            </ul>
        </div>
        <textarea :value="content" @input="$emit('update:content', $event.target.value)" class="form-control" rows="5"
            placeholder="Type code...">
        </textarea>
    </div>
</template>