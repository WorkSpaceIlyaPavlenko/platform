import { StaticImageData } from "next/image"

import LandingImg from '@/shared/assets/imgs/ landing.webp'
import ShopImg from '@/shared/assets/imgs/shop.webp'
import CoopImg from '@/shared/assets/imgs/coop.webp'
import CustomImg from '@/shared/assets/imgs/custom.webp'

import StagesOrder from '@/shared/assets/imgs/StagesToOrder.webp'
import StagesProgress from '@/shared/assets/imgs/StageProgress.webp'
import StagesResult from '@/shared/assets/imgs/StagesResult.webp'

import TelegrammSvg from '@/shared/assets/svg/TelegramSvg.svg'
import { WorksCardProps } from "./ui/card/type"

import makeImg from "./utils/makeImg"
import VentilImgs from "./assets/worksData/Ventil/impots"

export type NavListStructur = {
    name:string;
    targetId:string;
}
export type DevelopServiceList = {
    name:string;
    descr:string;
    imgUrl:StaticImageData;
}
export type OrderApplicationsList= {
    name:string;
    getResult:string
    icon:StaticImageData
    backGround:string
    endpoint?:string
}

export const NAV_LIST: NavListStructur[] = [
    {
        name:'Услуги',
        targetId:'Services'
    },
    {
        name:'Этапы',
        targetId:'Stages'
    },
    {
        name:'Связь',
        targetId:'Connection'
    },
    {
        name:'Работы',
        targetId:'Works'
    }
]
export const DEVELOP_SRVICE_LIST : DevelopServiceList[] = [
    {
        name:'Лендинг',
        descr:'Одностраничный сайт для продажи продукта',
        imgUrl:LandingImg,
    },
    {
        name:'Интернет магазин',
        descr:'Полный каталог с онлайн-оплатой',
        imgUrl:ShopImg,
    },
    {
        name:'Корпоративный сайт',
        descr:'Представление компании и услуг',
        imgUrl:CoopImg,
    },
    {
        name:'Индивидуальное решение',
        descr:'Сайт под ваши уникальные задачи',
        imgUrl:CustomImg,
    }
]

export const ORDER_APPLICATION_VARIANTS : OrderApplicationsList[]= [
    {
        name:'Telegram',
        getResult:'telegram',
        icon:TelegrammSvg,
        backGround:'#3497E7'
    },
    {
        name:'Заявка на сайте',
        getResult:'form',
        icon:TelegrammSvg,
        backGround:'#9169C6',
        endpoint:"#Connection"
    },
    {
        name:'Через личный кабинет',
        getResult:'account',
        icon:TelegrammSvg,
        backGround:'#1F1D21',
        endpoint:'user/createOrder'
    }
]
export const STAGES_LIST : DevelopServiceList[] = [
    {
        name:'Заказывай',
        descr:'Выбери подходящий тип услуги и оформи заявку',
        imgUrl:StagesOrder,
    },
    {
        name:'Отслеживай',
        descr:'Следи за этапами работы и вноси свои правки',
        imgUrl:StagesProgress,
    },
    {
        name:'Получай',
        descr:'Готовый сайт для запуска бизнеса уже у тебя',
        imgUrl:StagesResult,
    },
]
export const WORKS_DATA : WorksCardProps[]= [
    {
        name:'Ventil',
        descr:'Интернет-магазин сантехники',
        imgUrls:makeImg('Ventil', [
            VentilImgs.ImgMain,
            VentilImgs.ImgCart,
            VentilImgs.ImgAcc,
            VentilImgs.ImgCatalog,
            VentilImgs.ImgProduct,
            VentilImgs.ImgBrands,
            VentilImgs.ImgDevlivery,
            VentilImgs.ImgContacts
        ])
    },
    {
        name:'Beer',
        descr:'Интернет-магазин пива',
        imgUrls:makeImg('Beer', [
            VentilImgs.ImgMain,
            VentilImgs.ImgCart,
            VentilImgs.ImgAcc,
            VentilImgs.ImgCatalog,
            VentilImgs.ImgProduct,
            VentilImgs.ImgBrands,
            VentilImgs.ImgDevlivery,
            VentilImgs.ImgContacts
        ])
    },
    {
        name:'Myso',
        descr:'Корпоративный сайт мясной компании',
        imgUrls:makeImg('Myso', [
            VentilImgs.ImgMain,
            VentilImgs.ImgCart,
            VentilImgs.ImgAcc,
            VentilImgs.ImgCatalog,
            VentilImgs.ImgProduct,
            VentilImgs.ImgBrands,
            VentilImgs.ImgDevlivery,
            VentilImgs.ImgContacts
        ])
    },
    {
        name:'Test',
        descr:'Психологический тест-опросиник',
        imgUrls:makeImg('Test', [
            VentilImgs.ImgMain,
            VentilImgs.ImgCart,
            VentilImgs.ImgAcc,
            VentilImgs.ImgCatalog,
            VentilImgs.ImgProduct,
            VentilImgs.ImgBrands,
            VentilImgs.ImgDevlivery,
            VentilImgs.ImgContacts
        ])
    }
]