import { StaticImageData } from "next/image"

import { figuresImgs, serviceImgs, STAGES_IMGS } from "./assets/imgs/import"

import TelegrammSvg from '@/shared/assets/svg/TelegramSvg.svg'
import { WorksCardProps } from "./ui/card/type"

import makeImg from "./utils/makeImg"
import VentilImgs from "./assets/worksData/Ventil/impots"
import { ReplaceKey } from "./utils/type"

export type NavListStructur = {
    name:string;
    targetId:string;
}
export type dopImgs = {
    imgUrl:StaticImageData
    class:string | string[]
}
export type DevelopServiceList = {
    name:string;
    descr:string;
    imgUrl:StaticImageData;
    imgsFigures?:dopImgs[]
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
        imgUrl:serviceImgs.LandingImg,
        imgsFigures:[
            {
                imgUrl:figuresImgs.cube.PrupleCube,
                class:'LandingPrupleCubImg'
            },
            {
                imgUrl:figuresImgs.custom.FlowerImg,
                class:'LandingFlowerImg'
            },
            {
                imgUrl:figuresImgs.plus.PruplePlus,
                class:'LandingPruplePlusImg'
            },
            {
                imgUrl:figuresImgs.round.WhiteRoundImg,
                class:'LandigWhiteRoundImg'
            },
            {
                imgUrl:figuresImgs.custom.BageImg,
                class:'LandingBageImg'
            },
        ]
    },
    {
        name:'Интернет магазин',
        descr:'Полный каталог с онлайн-оплатой',
        imgUrl:serviceImgs.ShopImg,
        imgsFigures:[
            {
                imgUrl:figuresImgs.plus.PruplePlusV2,
                class:'ShopPruplePlusV2'
            },
            {
                imgUrl:figuresImgs.cube.WhiteCube,
                class:'ShopWhiteCube'
            },
            {
                imgUrl:figuresImgs.star.PrupleStarImg,
                class:'ShopPrupleStarImg'
            },
            {
                imgUrl:figuresImgs.custom.InterfaceImg,
                class:'ShopInterfaceImg'
            },
            {
                imgUrl:figuresImgs.cube.PrupleCubeV2,
                class:'ShopPrupleCubeV2'
            },
            {
                imgUrl:figuresImgs.ball.WhiteBallImg,
                class:'ShopWhiteBallImg'
            }
        ]
    },
    {
        name:'Корпоративный сайт',
        descr:'Представление компании и услуг',
        imgUrl:serviceImgs.CoopImg,
        imgsFigures:[
            {
                imgUrl:figuresImgs.cube.PurpleWhiteCube,
                class:'CoopPurpleWhiteCube'
            },
            {
                imgUrl:figuresImgs.ball.SmallGrayBallImg,
                class:'CoopSmallGrayBallImg'
            },
            {
                imgUrl:figuresImgs.plus.PruplePlus,
                class:'CoopPruplePlus'
            },
            {
                imgUrl:figuresImgs.ball.WhiteBallImg,
                class:'CoopWhiteBallImg'
            },
            {
                imgUrl:figuresImgs.round.WhiteRoundImg,
                class:'CoopWhiteRoundImg'
            },
        ]
    },
    {
        name:'Индивидуальное решение',
        descr:'Сайт под ваши уникальные задачи',
        imgUrl:serviceImgs.CustomImg,
        imgsFigures:[
            {
                imgUrl:figuresImgs.plus.PruplePlusV3,
                class:'CustomPruplePlusV3'
            },
            {
                imgUrl:figuresImgs.round.TranspareteRoundImg,
                class:'CustomTranspareteRoundImg'
            },
            {
                imgUrl:figuresImgs.ball.SmallPrupleBall,
                class:'CustomSmallPrupleBall'
            },
            {
                imgUrl:figuresImgs.ball.PurpleBallImg,
                class:'CustomPurpleBallImg'
            },
            {
                imgUrl:figuresImgs.ball.SmallGrayBallImg,
                class:'CustomSmallGrayBallImg'
            },
        ]
    }
]

export const ORDER_APPLICATION_VARIANTS : OrderApplicationsList[]= [
    {
        name:'Telegram',
        getResult:'telegram',
        icon:TelegrammSvg,
        backGround:'#3497E7',
        endpoint:'https://t.me/cubromanager_bot'
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
        endpoint:'users/entry'
    }
]
export const STAGES_LIST : ReplaceKey<DevelopServiceList, "imgsFigures", "dopImg", dopImgs>[] = [
    {
        name:'Заказывай',
        descr:'Выбери подходящий тип услуги и оформи заявку',
        imgUrl:STAGES_IMGS.main.StagesToOrederMianImg,
        dopImg:{
            imgUrl:STAGES_IMGS.dop.StagesCartImg,
            class:'StagesCartImg'
        }
    },
    {
        name:'Отслеживай',
        descr:'Следи за этапами работы и вноси свои правки',
        imgUrl:STAGES_IMGS.main.StagesProgressMianImg,
        dopImg:{
            imgUrl:STAGES_IMGS.dop.StagesPlacholdImg,
            class:'StagesProgressImg'
        }
    },
    {
        name:'Получай',
        descr:'Готовый сайт для запуска бизнеса уже у тебя',
        imgUrl:STAGES_IMGS.main.StagesResultMainImg,
        dopImg:{
            imgUrl:STAGES_IMGS.dop.StagesRoundImg,
            class:'StagesResultImg'
        }
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
        descr:'Корп. сайт мясной компании',
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