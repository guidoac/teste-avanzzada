<template>
    <div>
        <div 
            class="title-container"
        >
            <img 
                src="https://tanya-assets.getninjas.com.br/static/images/svg/fast-clock.svg" 
            />
            <p class="text-lg">Estamos quase lá</p>
            <p>Não perca tempo ligando para vários profissionais. Preencha os dados abaixo e <b>nós encontraremos os melhores pra você!</b></p>
        </div>
        <form>
            <base-input 
                v-for="field in userFields"
                :key="`field-${field.name}`"
                :field="field"
                @user-input="changeUserData($event)"
            />
        </form>
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
                @click="finishForm()"
            >
                Finalizar
            </base-button>
        </div>

    </div>
</template>

<script>
    import BaseInput from './Form/BaseInput'
    import BaseButton from './Form/BaseButton'

    export default {
        name: 'UserForm',
        props: {
            userFields: {
                required: true
            },
            userData: {
                required: false,
                type: Object
            }
        },
        components: {
            BaseInput,
            BaseButton
        },
        methods: {
            previousStep () {
                this.$emit('backto-service-form')
            },
            changeUserData (data) {
                this.userData[data.fieldName] = data.value
            },
            finishForm() {
                alert('Formulário Concluido')
            }
        }
    }
</script>

<style scoped>
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