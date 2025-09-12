class TodoClass  {
    id: string;
    name: string;
    desc: string;
    status: boolean;
    created_at : string;
    constructor(id: string, name: string, desc: string, status: boolean, created_at: string) {
        this.id = id,
        this.name = name,
        this.desc = desc,
        this.status = status,
        this.created_at = new Date().toISOString()
    }

    toggleStatus() {
        this.status = !this.status
    }
}