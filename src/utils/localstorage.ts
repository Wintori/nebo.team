export function saveAll(id: string, data: number[]) {
    localStorage.setItem(id, JSON.stringify(data));
}

export function getAll(id: string) {
    let json: string | null = localStorage.getItem(id);
    return JSON.parse(json!);
}

export function get(id: string, key: number) {
    let arr = getAll(id);

    if (arr[key] !== undefined) {
        return arr[key];
    } else {
        return null;
    }
}

export function set(id: string, key: number, newValue: number) {
    let arr = getAll(id);

    arr[key] = newValue;

    saveAll(id, arr);
}