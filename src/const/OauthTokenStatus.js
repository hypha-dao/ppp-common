export default {
    VALID: 'Valid',
    INVALIDATED_BY_USER: 'Invalidated by user',
    INVALIDATED_BY_SERVER: 'Invalidated by server',
    isValid(status) {
        return status === this.VALID;
    }
};