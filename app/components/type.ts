export interface IContact {
    name: string,
    logo: string,
    link: string
}

export interface IService {
    title: string,
    about: string,
    icon: string
}

export interface ISkills {
    name: string,
    level: string,
    // Icon: IconType
    icon: string
}

export type Category = 'React' | 'Java' | 'Python' | 'Express' | 'MySQL' | 'MongoDB' | 'Next.js'

export interface IProject {
    name: string,
    description: string[],
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: Category[],
    key_techs: string[]
}

export interface IEducation {
    degree: string,
    institution: string,
    grade: string,
    year: string,
    image_path: string,
}