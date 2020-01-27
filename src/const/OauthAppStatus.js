export default {
    ENABLED: 'Enabled',
    DISABLED_BY_APP: 'Disabled by app',
    DISABLED_BY_SERVER: 'Disabled by server',
    isEnabled(status) {
        return status === this.ENABLED;
    }
};