export type DashboardProps = {
    firstName        : string,
    lastName         : string,
    balance          : number,
    statistics       : {
        ig    : {
            invested   : number,
            value      : number,
            performance: number,
        },
        own   : {
            invested   : number,
            value      : number,
            performance: number,
        },
        totals: {
            invested   : number,
            value      : number,
            performance: number,
        },
    },
    isRefreshing     : boolean
    loadDashboardData: () => void
}

export type DashboardData = {
    wallet          : number,
    performance_data: {
        IGWines           : {
            totalInvested: number,
            currentValue : number,
        },
        Owned             : {
            totalInvested: number,
            currentValue : number,
        },
        Total             : {
            totalInvested: number,
            currentValue : number,
        }
        IGWinesPerformance: number,
        OwnPerformance    : number,
        OverallPerformance: number,
    }
}

export interface DashboardComponentProps {
    data          : DashboardProps,
    welcomeMessage: string
}

export interface DashboardSectionProps {
    title: string,
    data: {
        invested   : number,
        value      : number,
        performance: number,
    },
}
