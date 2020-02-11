export default {
    VALID: 'Valid',
    REVOKED_BY_USER: 'Revoked by user',
    REVOKED_BY_APP: 'Revoked by app',
    REVOKED_BY_SERVER: 'Revoked by server',
    APP_DELETED: 'App was deleted',
    isValid(status) {
        return status === this.VALID;
    },
};