<template>
    <div class="base-input-container">
        <p class="input-label">{{ field.label }}</p>
        <input
            v-if="field.type === 'phone'"
            type="tel" 
            v-mask="'(##) #####-####'"
            v-model="currentValue"
            @blur="currentValue === '' ? invalid = true : invalid = false"
            @input="$emit('user-input', { fieldName: field.name, value: $event.target.value })"
        />
        <input 
            v-else
            :type="field.type === 'email' ? 'email': 'text'"
            :value="value"
            @input="$emit('user-input', { fieldName: field.name, value: $event.target.value })"
            :placeholder="field.placeholder"
            @blur="value === '' ? invalid = true : invalid = false"
        />
        <p 
            class="validation-text"
            v-if="field.required && invalid"
        > 
            Este campo é requerido 
        </p>
        <p 
            class="additional-info" 
            v-if="field.type === 'phone'"
        >
            Vamos confirmar seu celular através de uma mensagem de texto!
        </p>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { VueMaskDirective } from 'v-mask'
    Vue.directive('mask', VueMaskDirective);

    export default {
        name: 'BaseInput',
        props: {
            value: {
                required: false,
                default: '',
                type: String
            },
            field: {
                required: true,
                type: Object
            }
        },
        data () {
            return {
                invalid: false,
                currentValue: this.value
            }
        }
    }
</script>

<style scoped>
.base-input-container {
    display: flex;
    flex-direction: column;
}

.base-input-container p {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: .8rem;
}

.base-input-container input {
    padding: .8rem;
    border-radius: .3rem;
    background-color: #f8f8f8;
    font-size: 1.1rem;
    color: #575757;
    cursor: pointer;
    border: 1px solid black;
}

.validation-text {
    color: #b40300;
    font-size: .8rem !important;
}

.additional-info {
    font-size: .8rem !important;
}
</style>