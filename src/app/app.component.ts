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
export class AppComponent implements OnInit {
    title = 'resume';

    mainPanelElements: MainPanelElement[];
    sidePanelElements: SidePanelElement[];

    desc: string;

    constructor() {

    }

    ngOnInit() {
        this.sidePanelElements = [
            {
                header: 'Personal Info',
                itemGroups: [
                    ['Address',
                    '205 S. Coronado St. Apt 105, ',
                    'Los Angeles, CA 90057'],
                    ['Phone',
                    '714-204-2188'],
                    ['E-mail',
                    'mark.thompson.code@gmail.com'],
                    ['WWW',
                    'https://mark-thompson.web.app'],
                    ['GitHub',
                    '@mark-thompson-code'],
                    ['LinkedIn',
                    '@mark-thompson-code'],
                ]
            },
            {
                header: 'Front End',
                itemGroups: [
                    ['Ionic 5, Angular 9, HTML 5, SCSS, CSS3, TypeScript, ES8'],
                ]
            },
            {
                header: 'Back End',
                itemGroups: [
                    ['Express.js, NPM, Node.js, Python, AWS'],
                ]
            },
            {
                header: 'Testing',
                itemGroups: [
                    ['Jasmine, Karma'],
                ]
            },
            {
                header: 'Databases',
                itemGroups: [
                    ['MongoDB, MySql, NoSQL, SQL'],
                ]
            },
            {
                header: 'SDLC',
                itemGroups: [
                    ['Agile, Confluence, Jira'],
                ]
            }
        ];

        this.mainPanelElements = [
            {
                header: 'Experience',
                sections: [
                    {
                        start: '2019-01',
                        end: 'Current', 
                        title: 'SMPL LLC',
                        subTitle: 'Full stack developer - Rocket Rounding project',
                        listItems: [
                            `Web and native application`,
                            `Created public API and node module SDK`,
                            'Responsible for handling DevOps, security, and sprint planning',
                        ],
                    },
                    {
                        start: '2018-06',
                        end: '2018-12', 
                        title: 'SMPL LLC',
                        subTitle: 'Backend developer - Willoe project',
                        listItems: [
                            `Collaberated with other developers to parse big data`,
                            `Worked on dashboards and analytics`,
                        ],
                    },
                    {
                        start: '2017-01',
                        end: 'Current', 
                        title: 'SMPL LLC',
                        subTitle: 'Full stack developer - Smpl Talk project',
                        listItems: [
                            `Mobile-friendly and print-friendly web app and native app`,
                            `Scaled from handling 1 location to all 30 locations for Adventist Health`,
                            `Created and documented API for integration their intranet`,
                            `Worked with other teams to integrate SSO`,
                            `Created various dashboards for analytics on user activity with exportable csvs`,
                            'Responsible for handling DevOps and sprint planning',
                        ],
                    },
                ]
            },
            {
                header: 'Education',
                sections: [
                    {
                        start: '2011-08',
                        end: '2015-05', 
                        title: 'Northern Arizona University, B.S. in Computer Science',
                        subTitle: 'Minor in Mathematics',
                        listItems: [
                            `Capstone project - Scheduling app for the Center for International Educational for managing agendas and mailing lists`,
                            `Worked for the Department of Teaching and Learning as a tutor`,
                        ],
                    },
                ]
            },
            {
                header: 'Projects',
                sections: [
                    {
                        title: 'Chess opening learning application',
                        listItems: [
                            `Created a mobile-friendly application that is also available on the iOS and Android app store`,
                        ],
                    },
                    {
                        title: 'SamTron Twitch developer',
                        listItems: [
                            `Created an overlay that interacts with the stream chat`,
                            `Created a bot that responds to the users in the stream chat`,
                        ],
                    },
                ]
            },
        ];


        this.desc = 'Innovative full stack developer skilled in leadership and project management, with a strong foundation in math, programming logic, cross-platform coding. Seeking to leverage solid development skills with a focus on collaboration and communication.'
    }



}
