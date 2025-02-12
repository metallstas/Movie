import { 
    AutoAwesome, 
    StarPurple500, 
    Bloodtype,
    MenuBook,
    FamilyRestroom,
    VolunteerActivism,
    MoodBad,
    Pool,
    LiveTv,
    LocalMovies,
    Reorder,
    Fort,
    SvgIconComponent,
} from "@mui/icons-material"

export const iconComponents = {
    AutoAwesome, 
    StarPurple500, 
    Bloodtype,
    MenuBook,
    FamilyRestroom,
    VolunteerActivism,
    MoodBad,
    Pool,
    LiveTv,
    LocalMovies,
    Reorder,
    Fort,
}

export interface ITop {
    title: string,
    icon: SvgIconComponent,
    url: string,
}

export const TOP_LISTS: ITop[] = [
    {
        title: 'Топ 100 популярныйх фильмов',
        icon: AutoAwesome,
        url: '/popular',
    },
    {
        title: 'Топ 250 лучших фильмов',
        icon: StarPurple500,
        url: '/best',
    },
    {
        title: 'Вампиры',
        icon: Bloodtype,
        url: '/vampire',
    },
    {
        title: 'Комиксы',
        icon: MenuBook,
        url: '/comics',
    },
    {
        title: 'Семейные',
        icon: FamilyRestroom,
        url: '/family',
    },
    {
        title: 'Романтика',
        icon: VolunteerActivism,
        url: '/romance',
    },
    {
        title: 'Зомби',
        icon: MoodBad,
        url: '/zombie',
    },
    {
        title: 'Катастрофы',
        icon: Pool,
        url: '/disasters',
    },
    {
        title: 'Популярные сериалы',
        icon: LiveTv,
        url: '/popular-serials',
    },
]

export const MOVIE_LISTS: ITop[] = [
    {
        title: 'Фильмы',
        icon: LocalMovies,
        url: '/movies',
    },
    {
        title: 'Сериалы',
        icon: Reorder,
        url: '/serials',
    },
    {
        title: 'Мультфильмы',
        icon: Fort,
        url: '/cartoons',
    },
]
