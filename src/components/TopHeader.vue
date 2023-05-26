<template>
    <div class="header-img-wrapper">
        <div class="header-img">
            <div class="circle"></div>
            <div class="two-row-gp">
                <div class="up bg-red">
                    <img src="@/assets/img/header-up.png" alt="">
                </div>
                <div class="down bg-yellow">
                    <img src="@/assets/img/programmer-girl-01.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-img-wrapper {
    position: relative;
    padding-bottom: 5rem;
    z-index: 1;
}

.header-img {
    position: relative;
    width: 490px;
    height: calc(490px * 0.5);
    margin: 0 auto;
}

.circle {
    background-image: url('@/assets/img/typing-girls-02.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: calc(490px * -0.25);
    left: -2rem;

    height: calc(490px * 0.75);
    width: calc(490px * 0.75);
    border-radius: 50%;
    z-index: -1;
    border: 4px solid var(--color-g-web);
}

.circle::before {
    font-weight: bold;
    letter-spacing: 1px;
    width: calc(490px * 0.55);
    font-size: .7rem;
    padding: .5rem;
    position: absolute;
    bottom: -2rem;
    left: 60%;

    box-shadow: .5rem .5rem 0 0 var(--color-pale-g-web);

    background-color: var(--color-g-web);
    color: var(--color-white);
    content: 'IT+日本語を学び、Webプログラマーやシステムエンジニア等のIT業界で活躍する人材を目指します。';
}

.two-row-gp {
    padding: .5rem;
    height: inherit;
    width: 75%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .25rem;
}

.two-row-gp>div {
    flex: 0 0 45%;
    height: 50%;
    text-align: right;
}

.two-row-gp>div>img {
    border: 2px solid var(--color-g-web);
    border-radius: .5rem;
}

.two-row-gp>div.up>img {
    height: 100%;

    object-fit: contain;
}

.two-row-gp>div.down>img {
    height: 100%;

    object-fit: contain;
    margin-right: 3.1rem;
}
</style>