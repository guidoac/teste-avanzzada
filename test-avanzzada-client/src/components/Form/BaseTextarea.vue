<template>
    <div class="base-textarea-container" v-if="isActive">
        <p class="input-label">{{ field.label }}</p>
        <textarea
            :placeholder="field.placeholder"
            :value="value"
            @input="$emit('input', { fieldName: field.label, value: $event.target.value })"
        />
        <p 
            class="validation-text"
            v-if="field.required && !value && value !== ''"
        > 
            Este campo é requerido 
        </p>
    </div>
</template>

<script>
    export default {
        name: 'BaseTextarea',
        props: {
            isActive: {
                required: true,
                type: Boolean
            },
            field: {
                required: true,
                type: Object
            },
            value: {
                required: false,
                default: '',
                type: String
            }
        }
    }
</script>

<style scoped>
.base-textarea-container {
    display: flex;
    flex-direction: column;
}

.base-textarea-container p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: .8rem;
}

.base-textarea-container textarea {
    padding: .8rem;
    border-radius: .3rem;
    background-color: #f8f8f8;
    font-size: 1.1rem;
    color: #575757;
    cursor: pointer;
}
</style>