<template>
    <article>
        <NuxtLink to="/gestaltung/Indymedia">
            <div>
                <h1>Indymedia</h1>
                <p>Redesign</p>
            </div>

            <ul>
                <li>NodeJS</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <img src="/assets/.placeholder/indy-header.png" alt="">
        </NuxtLink>
    </article>
</template>

<style scoped>
article {
    height: calc(60vh + 6rem);
    position: relative;
    padding: 3rem;
    margin: 0 0 10rem 0;
}

img {
    width: 70%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    height: 100%;
}

a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
}

div {
    padding-top: 20vh;
}

h1 {
    margin: 0;
}
</style>