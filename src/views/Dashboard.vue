<!--
 * @Description: 
 * @Author: 唐健峰
 * @Date: 2023-10-08 17:04:51
 * @LastEditors: ${author}
 * @LastEditTime: 2023-10-08 17:32:39
-->
<template>
    <!-- 两张一行-->
    <div id="markTop" class="relative"></div>
    <div v-if="!isLoading">
        <div v-for="number in  Math.floor(imageNum / 10) + 1 " :key="number">
            <div class="flex flex-col phone:flex-row justify-around">
                <div class="phone:w-5/12 my-3">
                    <n-carousel show-arrow autoplay class="rounded-2xl ">
                        <div
                            v-for="imgnumber in  (imageNum - ((number - 1) * 10)) > 5 ? 5 : (imageNum - ((number - 1) * 10)) ">
                            <div class="relative">
                                <img v-if="newsWithImg[(number - 1) * 10 + imgnumber - 1].lazy" :key="imgnumber"
                                    class="carousel-img" :src="newsWithImg[(number - 1) * 10 + imgnumber - 1].img">
                                <div v-if="!newsWithImg[(number - 1) * 10 + imgnumber - 1].lazy"
                                    class="h-full flex flex-row justify-center items-center">
                                    <div class="h-[200px] flex flex-row justify-center items-center">
                                        <n-spin size="large">
                                            加载中...
                                        </n-spin>
                                    </div>
                                </div>
                                <div class="absolute top-0 lift-0 w-full h-full opacity-70 hover:bg-black">
                                    <div class="h-full group relative">
                                        <a :href="newsWithImg[(number - 1) * 10 + imgnumber - 1].link" target="_blank"
                                            class="hidden absolute top-0 left-0 group-hover:block hover:cursor-pointer p-2 text-white h-full w-full overflow-scroll">
                                            <p>{{ newsWithImg[(number - 1) * 10 + imgnumber - 1].time + newsWithImg[(number
                                                - 1) * 10 +
                                                imgnumber
                                                - 1].auth }}</p>
                                            <p>{{ newsWithImg[(number - 1) * 10 + imgnumber - 1].dec }}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="text-2xl ml-2">{{ newsWithImg[(number - 1) * 10 + imgnumber - 1].title }}</div>
                        </div>
                        <template #arrow="{ prev, next }">
                            <div class="custom-arrow">
                                <button type="button" class="custom-arrow--left bg-gray-400 opacity-75" @click="prev">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                                <button type="button" class="custom-arrow--right bg-gray-400 opacity-75" @click="next">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </template>
                        <template #dots="{ total, currentIndex, to }">
                            <ul class="custom-dots">
                                <li v-for=" index  of  total " :key="index"
                                    :class="{ ['is-active']: currentIndex === index - 1 }" @click="to(index - 1)" />
                            </ul>
                        </template>
                    </n-carousel>
                </div>
                <div v-if="imageNum - 5 - (number - 1) * 10 > 0" class="phone:w-5/12 my-3">
                    <n-carousel show-arrow autoplay class="rounded-2xl">
                        <div
                            v-for=" imgnumber  in  (imageNum - ((number - 1) * 10) - 5) > 5 ? 5 : (imageNum - ((number - 1) * 10) - 5) ">
                            <div class="relative">
                                <img v-if="newsWithImg[(number - 1) * 10 + 5 + imgnumber - 1].lazy" :key="imgnumber"
                                    class="carousel-img" :src="newsWithImg[(number - 1) * 10 + 5 + imgnumber - 1].img">
                                <div v-if="!newsWithImg[(number - 1) * 10 + 5 + imgnumber - 1].lazy"
                                    class="h-full flex flex-row justify-center items-center">
                                    <div class="h-[200px] flex flex-row justify-center items-center">
                                        <n-spin size="large">
                                            加载中...
                                        </n-spin>
                                    </div>
                                </div>
                                <div class="absolute top-0 lift-0 w-full h-full opacity-70 hover:bg-black">
                                    <div class="h-full group relative">
                                        <a :href="newsWithImg[(number - 1) * 10 + 5 + imgnumber - 1].link" target="_blank"
                                            class="hidden absolute top-0 left-0 group-hover:block hover:cursor-pointer p-2 text-white h-full w-full overflow-scroll">
                                            <p>{{ newsWithImg[(number - 1) * 10 + 5 + imgnumber - 1].time +
                                                newsWithImg[(number - 1) * 10 + 5 +
                                                    imgnumber - 1].auth }}</p>
                                            <p>{{ newsWithImg[(number - 1) * 10 + 5 + imgnumber - 1].dec }}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="text-2xl ml-2">{{ newsWithImg[(number - 1) * 10 + 5 + imgnumber - 1].title }}</div>
                        </div>
                        <template #arrow="{ prev, next }">
                            <div class="custom-arrow">
                                <button type="button" class="custom-arrow--left bg-gray-400 opacity-75" @click="prev">
                                    <i class="fa-solid fa-chevron-left"></i>
                                </button>
                                <button type="button" class="custom-arrow--right bg-gray-400 opacity-75" @click="next">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        </template>
                        <template #dots="{ total, currentIndex, to }">
                            <ul class="custom-dots">
                                <li v-for=" index  of  total " :key="index"
                                    :class="{ ['is-active']: currentIndex === index - 1 }" @click="to(index - 1)" />
                            </ul>
                        </template>
                    </n-carousel>
                </div>
            </div>
        </div>
    </div>
    <div id="markButtom" class="relative"></div>
    <!-- loading图 -->
    <div v-if="isLoading" v-for="number in 2" :key="number">
        <div class="flex flex-col phone:flex-row justify-around">
            <div class="phone:w-5/12 h-[240px] rounded-2xl my-3 bg-gray-400 loading_dark_background">
                <div class="h-[200px] overflow-hidden">
                    <ElSkeletonItem animated variant="image" style="height: 200px"></ElSkeletonItem>
                </div>
            </div>
            <div class="phone:w-5/12 h-[240px] rounded-2xl my-3 bg-gray-400 loading_dark_background">
                <div class="h-[200px]  overflow-hidden">
                    <ElSkeletonItem animated variant="image" style="height: 200px"></ElSkeletonItem>
                </div>
            </div>
        </div>
    </div>
    <div v-if="!isLoading" class="flex flex-col phone:flex-row">
        <div class="w-full  phone:w-1/2">
            <ul class="pl-0 px-5" v-for="number in Math.floor((Math.floor((news.length - imageNum) / 2)) / 10) + 1"
                :key="number">
                <li
                    v-for="anumber in (10 < (news.length - imageNum) - (number - 1) * 10) ? 10 : (news.length - imageNum) - (number - 1) * 10">
                    &#8226;<a class=" hover:text-blue-500 dark_link " :key="(anumber)"
                        :href="newsWithoutImg[(number - 1) * 10 + anumber - 1].link" target="_blank">
                        {{ newsWithoutImg[(number - 1) * 10 + anumber - 1].title }}｜
                    </a>
                </li>
            </ul>
        </div>
        <div class="w-full  phone:w-1/2">

            <ul class="pl-0 px-5" v-for="number in Math.floor((Math.floor((news.length - imageNum) / 2)) / 10) + 1"
                :key="number">
                <li
                    v-for="anumber in (10 < (news.length - imageNum) - (number - 1) * 10) ? 10 : (news.length - imageNum) - (number - 1) * 10">
                    &#8226;<a class="dark_link hover:text-blue-500" :key="(anumber)"
                        :href="newsWithoutImg[(number - 1) * 10 + anumber - 1].link" target="_blank">
                        {{ newsWithoutImg[news.length - imageNum - (number - 1) * 10 - anumber].title }}｜
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div v-if="!isLoading" class="flex flex-row justify-center">
        <el-pagination layout="prev, pager, next" :page-count="Math.ceil(allNum / (end - start + 1))"
            v-model:current-page="currentPage" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
</template>
<script lang="ts">
import { mapState } from "vuex";
import { useLoadingBar, NCarousel } from "naive-ui";
import axios, { AxiosResponse } from "axios";
import { ref } from "vue";
import { ElSkeletonItem, ElSkeleton, ElMessage, ElPagination } from "element-plus";
import { NSpin } from "naive-ui";
import { Loading } from "element-plus/es/components/loading/src/service";

export default {

    name: "DashboardDefault",
    components: {
        ElSkeletonItem,
        ElSkeleton,
        NCarousel,
        NSpin,
        ElPagination
    },
    data() {
        return {
            imageNum: 0 as number,
            currentPage: 1,
            coutNum: 0,
            newsWithImg: [] as { lazy: boolean; img: string; link: string; dec: string; auth: string; time: string; title: string }[],
            newsWithoutImg: [] as { lazy: boolean; img: string; link: string; dec: string; auth: string; time: string; title: string }[],
            news: [] as { lazy: boolean; img: string; link: string; dec: string; auth: string; time: string; title: string }[],
            search: "" as string,
            result: [],
            isLoading: true,
            allNum: 1,
            //以下与后端有关
            start: 0,
            end: 30,
            resourseWebNum: 3,
        }
    },
    setup() {
        const loadingBar = useLoadingBar()
        const disabledRef = ref(true)
        return {
            disabled: disabledRef,
            handleStart() {
                loadingBar.start()
                disabledRef.value = false
            },
            handleFinish() {
                loadingBar.finish()
                disabledRef.value = true
            },
            handleError() {
                disabledRef.value = true
                loadingBar.error()
            }
        }
    },
    computed: {
        getFont() {
            return 'font-family:' + this.fontFamily;
        },
        ...mapState(['fontFamily']),
        getCount() {
            if (this.coutNum > this.imageNum) {
                return false;
            } else {
                this.coutNum++;
            }
        }
    },
    async beforeCreate() {
        const res = await axios({
            method: 'post',
            url: 'http://123.207.199.85:3000/getNum',
            data: {
            },
            timeout: 5000
        });
        this.allNum = res.data
    },
    async beforeMount() {
        await this.getNews()
    },
    mounted() {
        this.$nextTick(() => {
        });
    },
    beforeDestroy() {
    },
    methods: {
        handleSizeChange() {
            console.log("size change")
        },
        async handleCurrentChange() {
            const step = this.end - this.start
            this.start = (this.currentPage - 1) * step
            this.end = this.start + step
            console.log(this.start + " " + this.end)
            await this.getNews()
        },
        async getNews() {
            this.isLoading = true
            this.handleStart();
            try {
                const res = await axios({
                    method: 'post',
                    url: 'http://123.207.199.85:3000/getChinaNews',
                    data: {
                        search: "",
                        start: this.start,
                        end: this.end,
                    },
                    timeout: 5000
                });

                const existingData: { lazy: boolean; img: string; link: string; dec: string; auth: string; time: string; title: string }[] = JSON.parse("[" + res.data.slice(0, -1) + "]");
                //@ts-ignore
                this.news = existingData;
                this.imageNum = 0
                let j = 0;
                for (let i = 0; i < this.news.length; i++) {
                    if (this.news[i].img !== null && this.news[i].img.trim() !== "") {
                        //@ts-ignore
                        this.newsWithImg[this.imageNum] = this.news[i];
                        this.newsWithImg[this.imageNum].lazy = true;
                        this.imageNum++;
                    } else {
                        this.newsWithoutImg[j] = this.news[i];
                        this.newsWithoutImg[j].lazy = true
                        j++
                    }
                }
                this.isLoading = false;
                this.handleFinish();
            } catch (e: any) {
                if (e.response) {
                    const statusCode = e.response.status;
                    console.log('请求失败，状态码:', statusCode);
                }
                this.handleError();
                ElMessage.error("加载失败，你可尝试重新加载");
                this.isLoading = false;
                console.log(e);
            }
        },
    }
};
</script>
<style scoped>
.el-pagination {
    --el-pagination-bg-color: #9da1a5
}

::v-deep .el-pagination button:disabled {
    background-color: #9da1a5;
    opacity: 60;
}

::v-deep .el-pagination button {
    margin-right: 2px;
    margin-left: 2px;
    color: black
}

::v-deep .el-pager li {
    margin-right: 2px;
    margin-left: 2px;
}

.el-pagination button.is-disabled,
.el-pagination button:disabled {
    background-color: red
}

.carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
}

.custom-arrow {
    display: flex;
    position: absolute;
    bottom: 25px;
    right: 10px;
}

.custom-arrow button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-right: 12px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-width: 0;
    border-radius: 8px;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.custom-arrow button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
    transform: scale(0.95);
    transform-origin: center;
}

.custom-dots {
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
}

.custom-dots li {
    display: inline-block;
    width: 12px;
    height: 4px;
    margin: 0 3px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.custom-dots li.is-active {
    width: 40px;
    background: #fff;
}
</style>
  