import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"


export const Services = () => {
    return (
        <div className="py-16 ">
        <div className="">
            <Typography variant={"h2"} as={"h2"} className="text-center mb-10">Медицински Услуги до вашата врата</Typography>

            <div className="grid grid-cols-2 md:grid-cols-3 md:w-188 gap-6 max-w-358 mx-auto justify-items-center xl:w-auto xl:max-w-none xl:mx-0 xl:flex xl:justify-between">
                <Service
                    image="/images/services/image1.png"
                    title="Доктор"
                    description="Прегледи, консултации и диагностика в домашни условия."
                    btnText="Запази Час"
                />
                <Service
                    image="/images/services/image2.png"
                    title="Медицинска сестра"
                    description="Манипулации, инжекции, превръзки и грижа след лечение."
                    btnText="Запази Час"
                />
                <Service
                    image="/images/services/image3.png"
                    title="IV Терапия"
                    description="Витамини и терапии под медицински контрол."
                    btnText="Запази Час"
                />
                <Service
                    image="/images/services/image4.png"
                    title="Лабораторни изследвания"
                    description="Вземане на проби и лабораторни изследвания без посещение в лаборатория."
                    btnText="Запази Час"
                />
                <Service
                    image="/images/services/image5.png"
                    title="Аптека"
                    description=""
                    btnText="Очаквайте Скоро"
                />
            </div>
        </div>
        </div>

    )
}

type ServiceProps = {
    image: string,
    title: string,
    description: string,
    btnText: string

}
const Service = (props: ServiceProps) => {
    return <div className="w-full h-114.25 sm:h-fit ">
        {props.image && <img src={props.image} alt={props.title} className="rounded-3xl w-full h-61.5 md:h-auto mb-6 object-cover object-[25%_25%] aspect-2/3" />}
        <Typography variant="h4" as="h4" className="mb-2.5 w-full">{props.title}</Typography>
        {props.description && <Typography variant="sm" as={"p"} className="mb-6">{props.description}</Typography>}
        <Button className="" variant={"outlined"}>
            <Typography variant="link" as="p" className="hover:text-inherit">{props.btnText}</Typography>
        </Button>
    </div>
}