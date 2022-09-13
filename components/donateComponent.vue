<template>
    <div>
        <iframe v-if="visible" src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&default-sum=&button-text=12&successURL=&quickpay=shop&account=410016424032511&targets=%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%20%D0%BF%D0%BE%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B5&" width="423" height="222" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
    </div>
</template>

<script>
    export default{
        name: 'Donate',
        data(){
            return{
                visible: false,
            }
        }
    }
</script>