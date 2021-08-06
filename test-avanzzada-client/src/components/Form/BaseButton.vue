<template>
    <button
        :class="{
            'button-normal': !outline,
            'button-outline': outline
        }"
        @click="$emit('click')"
    >
        <slot />
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',
        props: {
            outline: {
                required: false,
                default: false
            }
        }
    }
</script>

<style scoped>
  button {
    border-style: solid;
    border-color: #195ca9;
    padding: 1rem;
    border-radius: .5rem;
    flex: 1;
    transition: background-color .5s ease;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
  }

  .button-normal {
      background-color: #195ca9;
      color: #e5f7ff;
  }

  .button-normal:hover {
      background-color: #009ded;
  }

  .button-outline {
      background-color: transparent;
      color: #195ca9;;
  }
  
  .button-outline:hover {
      background-color: #e5f7ff; 
  }
</style>