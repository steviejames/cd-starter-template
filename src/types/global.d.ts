export type InvitationDetails = {
    id: string;
    title: string;
    date: Date;
    subtitle: string;
    time: string;
    theme: {
        background: string;
        color: string;
        name: string;
        title: string;
        bgColor: string;
        preview: string;
        category: string;
        type: string;
    };
    age: number;
    category: Array<string>;
    address: string;
    place: string;
    infoline: string;
    host: string;
    dresscode: string;
};