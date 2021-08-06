<template>
    <div>
        <div 
            class="title-container"
        >
            <h2>Explique o que você precisa</h2>
            <h4>Receba até 4 orçamentos grátis, online!</h4>
        </div>
        <div 
            class="current-field"
            v-for="(field, index) in serviceFields"
            :key="`field-${index}`"
        >
            <component 
                :is="detectComponent(field.type)" 
                :field="field"
                :is-active="index === activeStep"
                :value="serviceData[field.label]"
                @input="changeServiceData($event)"
                v-model="serviceData[field.label]"
            />
        </div>
        
        <div class="buttons-container">
            <base-button
                class="back-button"
                :outline="true"
                @click="previousStep()"
            >
                Voltar
            </base-button>
            <base-button
                class="next-button"
                @click="nextStep()"
            >
                Próximo
            </base-button>
        </div>
    </div>
</template>

<script>
    import BaseSelect from './Form/BaseSelect'
    import BaseTextarea from './Form/BaseTextarea'
    import BaseButton from './Form/BaseButton'

    export default {
        name: 'ServiceForm',
        data () {
            return {
                activeStep: 0
            }
        },
        props: {
            serviceFields: {
                required: true
            },
            serviceData: {
                required: false,
                type: Object
            }
        },
        components: {
            BaseSelect,
            BaseTextarea,
            BaseButton
        },
        computed: {
            validateActiveStep () {
                let validation = true

                let key = this.serviceFields[this.activeStep].name;
                let fieldByStep = this.serviceData[key]
                let isRequired = this.serviceFields.filter(field => field.name === key)[0].required

                if (!isRequired) return true;

                if ((!fieldByStep || fieldByStep.value === '') && isRequired) validation = false

                return validation
            }
        },
        methods: {
            detectComponent (type) {
                switch (type) {
                    case 'enumerable':
                    return 'BaseSelect'
                    case 'big_text':
                    return 'BaseTextarea'
                }
            },
            previousStep () {
                if (this.activeStep > 0) this.activeStep--
            },
            nextStep () {
                if (this.activeStep < this.serviceFields.length && this.validateActiveStep){ 
                    this.activeStep++
                }
                if (this.activeStep === this.serviceFields.length) this.$emit('goto-user-form')
            },
            changeServiceData (data) {
                this.serviceData[data.fieldName] = data.value
            }
        }
    }
</script>

<style scoped>
  .text-lg {
    font-size: 1.5rem;
  }

  .title-container {
    text-align: center;
    margin-bottom: 2rem;
  }

  .buttons-container {
    width: 100%;
    display: flex;
    margin-top: 2rem;
  }

  .back-button {
    margin-right: 2rem;
  }
</style>