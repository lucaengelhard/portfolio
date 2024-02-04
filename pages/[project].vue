<template>
    <div>
        <div class="landing">
            <div class="heading">
                <WordWave text="" />
                <WordWave :text="title" />
            </div>
            <img :src="thumbnail" alt="" class="landing-bg" />
        </div>
        <div class="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quod similique molestias, magnam,
            modi laudantium nisi eveniet accusantium aliquid quasi ipsam fugit ex asperiores deserunt laboriosam dolor earum
            impedit veritatis iste numquam suscipit repudiandae praesentium id sequi. Aperiam dignissimos numquam architecto
            a est magni aliquam adipisci nihil libero accusantium, aut totam reiciendis hic omnis obcaecati cumque accusamus
            porro eligendi, dolor sequi! Reprehenderit, exercitationem sunt, praesentium obcaecati a assumenda saepe natus,
            debitis provident voluptatibus accusantium id inventore sint itaque quo. Corporis distinctio nobis sunt culpa
            eveniet temporibus, voluptatem hic beatae omnis doloremque, officia alias at nihil illo! Porro excepturi amet
            eum mollitia optio consequatur quod quo laudantium odio, ipsam voluptatibus minima qui corrupti eligendi et esse
            consequuntur itaque voluptate fugiat architecto, quae magni perspiciatis a explicabo. Quis voluptatem, quae
            aliquam earum unde inventore excepturi totam voluptatum, id quas temporibus! Ex eveniet hic neque autem deleniti
            itaque iste voluptate quisquam illum consectetur ad voluptatem soluta consequuntur explicabo voluptates
            similique deserunt tempora, unde reprehenderit accusantium odio ducimus quas minima? Quisquam architecto ex
            consequuntur sint cupiditate eos, ab voluptate eius inventore debitis, eveniet atque quod esse, nam odio. Ut
            officiis nihil veniam placeat, amet consequatur asperiores, beatae eaque officia fugit aperiam at nulla quaerat
            dolorum veritatis. Officia atque repellat reprehenderit aperiam dolor voluptatem esse sunt porro unde, ut
            quisquam eius odit natus doloribus aspernatur beatae nam at sapiente ipsa adipisci voluptates vel itaque!
            Impedit odio quis quam quos atque quisquam, nobis mollitia voluptate perspiciatis? Repellat ipsum eaque
            exercitationem repellendus ab temporibus incidunt labore quae explicabo, consectetur perferendis modi alias
            numquam quis quibusdam culpa. Ab earum est aspernatur qui quia officiis amet quaerat odio culpa. Adipisci
            distinctio iure eius, numquam earum omnis eum officiis reprehenderit a deserunt unde dolore! Magnam ipsa, eaque
            quasi et sint voluptatum aperiam incidunt sequi, esse debitis tenetur recusandae repellat eligendi voluptates
            cum optio dicta dignissimos velit laboriosam vitae nostrum aspernatur laudantium architecto? Repellat, corrupti
            iusto. Assumenda a unde harum laboriosam nulla placeat nam blanditiis omnis voluptates illo vero minima nesciunt
            quos ipsum animi perspiciatis ducimus eius mollitia deleniti ratione, quibusdam dolorem earum sequi voluptatum?
            Aut quidem doloribus minus veritatis tempore blanditiis quos suscipit? Itaque aliquid, animi atque labore
            tempora, sit vero quidem illo quam molestiae iure molestias distinctio? A deleniti amet iste ducimus dolorem
            minima odit necessitatibus id reiciendis iure commodi, voluptas accusantium iusto. Pariatur, assumenda
            distinctio? Necessitatibus doloremque, quos nemo totam ad, quaerat voluptatibus in, aut tempora adipisci quas!
        </div>
    </div>
</template>

<script setup>
const { project: title } = useRoute().params
const thumbnail = "/images/indy-header.png"
</script>

<style scoped>
.landing {
    height: 100vh;

    display: grid;
    justify-items: center;
    align-content: center;
    position: relative;
}

.landing>.heading {
    position: fixed;
    top: 1rem;
    left: 3rem;
    mix-blend-mode: difference;
    font-size: 4rem;

    overflow: hidden;
    cursor: pointer;
    z-index: 1;
}

.landing-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 50%;
    translate: 0 -50%;
    object-fit: contain;
    scale: 1;
    transition: all 0.3s;
}

a {
    transition: all 0.3s;
}

.page-enter-from a,
.page-leave-to a {
    opacity: 0;
    filter: blur(1rem);
}

.content {

    margin: auto;
    margin-top: 3rem;
    width: 80%;
    padding: 2rem;
    mix-blend-mode: difference;
}
</style>