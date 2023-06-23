
export function format_timestamp(timestamp: number): string {
    return new Date(timestamp).toUTCString();
}
