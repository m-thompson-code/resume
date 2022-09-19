import { Component, OnInit } from '@angular/core';

export type SidePanelItem = string;

export interface SidePanelElement {
    header: string;
    itemGroups: string[][];
};

export interface MainPanelElement {
    header: string;
    sections: {
        start?: string;
        end?: string;
        title: string;
        subTitle?: string;
        listItems: string[];
    }[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    readonly mainPanelElements: MainPanelElement[] = [
        {
            header: 'Experience',
            sections: [
                {
                    start: 'Jan 2021',
                    end: 'Current', 
                    title: 'Bitovi',
                    subTitle: 'Hiring and Technical Lead Angular Consultant and Contractor: Angular 7-14, NgRx, NGXS, RxJS',
                    listItems: [
                        `Maintainer for open source projects involving Angular and Nx`,
                        `Authored blog posts and presentations focused on various Angular topics`,
                        `Worked with several clients such as Apple`,
                    ],
                },
                {
                    start: 'Aug 2020',
                    end: 'Sep 2020', 
                    title: 'Master of Shapes, Visible',
                    subTitle: 'Full Stack Developer - Red Rocks Unpaused: Angular 10, Firebase',
                    listItems: [
                        `Interactive web experience that allowed for real time user interaction for the Visible X Red Rocks concert`,
                    ],
                },
                {
                    start: 'Mar 2020',
                    end: 'Jun 2020', 
                    title: 'Master of Shapes, SAP',
                    subTitle: 'Full Stack Developer - Commit Water: Angular 9, Firebase, Node JS, MongoDB',
                    listItems: [
                        `Interactive intelligent enterprise showcase during the Sapphire NOW Reimagined event for SAP`,
                    ],
                },
                {
                    start: 'Jan 2019',
                    end: 'Jan 2021', 
                    title: 'SMPL LLC',
                    subTitle: 'Full Stack Developer - Rocket Rounding: Angular 7 - 10, Ionic 3 - 5, Firebase, NodeJS',
                    listItems: [
                        `Applications for digital patient rounding, public API, and Node SDK`,
                        'Coordinated sprints and worked directly with product owner',
                    ],
                },
                {
                    start: 'Jun 2018',
                    end: 'Dec 2018', 
                    title: 'SMPL LLC',
                    subTitle: 'Back End Developer - Willoe: Angular 8, Mongo DB, AWS',
                    listItems: [
                        `Application MVP for monitoring analytics for hospitals and staff hygiene`,
                    ],
                },
                {
                    start: 'Jan 2017',
                    end: 'Sep 2020', 
                    title: 'SMPL LLC',
                    subTitle: 'Full Stack Developer - Smpl Talk: Angular 2 - 8, Ionic 3 - 5, Firebase, NodeJS',
                    listItems: [
                        `Applications for making communication simpler for hospitals and staff, public API, automated emailing services, easy to print newsletters for all of Adventist Health's locations in California`,
                    ],
                },
            ],
        },
        {
            header: 'Education',
            sections: [
                {
                    start: 'Aug 2011',
                    end: 'May 2015', 
                    title: 'Northern Arizona University, \nB.S. in Computer Science',
                    subTitle: 'Minor in Mathematics',
                    listItems: [
                        `Capstone project - Application for managing agendas and mailing lists for the Center for International Educational using Ruby on Rails and MySQL`,
                        `Worked for the Department of Teaching and Learning as a tutor`,
                    ],
                },
            ],
        },
    ];

    readonly sidePanelElements: SidePanelElement[] = [
        {
            header: 'Personal Info',
            itemGroups: [
                ['Contact', 'm.thompson.code@gmail.com', '(714) 204-2188'],
                ['Location', 'Downtown Los Angeles, CA'],
                ['WWW',
                'mark-thompson.web.app'],
                ['GitHub',
                '@m-thompson-code'],
                ['LinkedIn',
                '@m-thompson-code'],
                ['Twitter',
                '@CodeMooCow'],
            ],
        },
        {
            header: 'Soft Skills',
            itemGroups: [
                ['Adaptability, Self-management, Strong Work Ethic, Quick Learner'],
            ],
        },
        {
            header: 'Languages',
            itemGroups: [
                ['Typescript, Javascript, NodeJS, Python, Ruby, C, C++, Java'],
            ],
        },
        {
            header: 'Frameworks and Libraries',
            itemGroups: [
                ['Angular 2-14, Nx, Ionic 3-5, RxJS, NgRx, NGXS, SendGrid, Django, Ruby on Rails, AngularJS'],
            ],
        },
        {
            header: 'Database Management',
            itemGroups: [
                ['Firebase Realtime and Firestore, MongoDB, MySql'],
            ],
        },
        {
            header: 'Cloud-Based Technologies',
            itemGroups: [
                ['Google/Firebase Cloud Functions, AWS, Heroku'],
            ],
        },
        {
            header: 'Tools',
            itemGroups: [
                ['Figma, Sketch, ProtoPie, Adobe XD'],
            ],
        },
        {
            header: 'SDLC',
            itemGroups: [
                ['Confluence, Jira, Radar'],
            ],
        },
    ];

    showPrintWarning: boolean = !this.isChrome();

    /**
     * source: https://stackoverflow.com/a/9851769/9115419
     */
    isChrome(): boolean {
        if (navigator.userAgent.includes("Edg")) {
            return false;
        }

        return navigator.userAgent.includes("Chrome");
    }
}
