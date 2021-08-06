<template>
    <div class="base-select-container" v-if="isActive">
        <p class="input-label">{{ field.label }}</p>
        <select
            @change="$emit('input', { fieldName: field.label, value: $event.target.value })"
        >
            <option disabled :selected="typeof value == 'undefined' || !value">
                {{ field.mask }}
            </option>
            <option 
                v-for="(value, index) in field.values"
                :key="`option-${index}`"
                :value="value"
                :selected="value !== ''"
            >
                {{ value }}
            </option>
        </select>
        <p 
            class="validation-text"
            v-if="field.required && !value"
        > 
            Este campo é requerido 
        </p>
    </div>
</template>

<script>
    export default {
        name: 'BaseSelect',
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
                required: true
            }
        }
    }
</script>

<style scoped>
.base-select-container select {
    width: 100%;
    padding: .8rem;
    border-radius: .3rem;
    background-color: #f8f8f8;
    font-size: 1.1rem;
    color: #575757;
    cursor: pointer;
}

.input-label {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: .8rem;
}

.validation-text {
    color: #b40300;
    font-size: .8rem;
}

</style>