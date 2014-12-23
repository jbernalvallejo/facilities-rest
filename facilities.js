var Facilities = {
    client: null,
    options: {},
    defaultOptions: {
        serviceBaseUrl: "http://dev-internal.abcam.com/",
        ajaxOptions: {
            ajax: {
                dataType: "json",
                crossDomain: true,
                xhrFields: { withCredentials: true },
                accepts: { json: GenerateVersionString(1) }
            }
        }
    },
    init: function(options) {
        $.support.cors = true;
        $.extend(true, this.options, this.defaultOptions, options);
        this.createClient(this.options.ajaxOptions);
    },
    createClient: function(extendedAjaxOptions) {
        this.client = new $.RestClient(this.options.serviceBaseUrl + "corporate/", extendedAjaxOptions);
        this.client.add('Facilities');
    },
    getForRoleType: function(roleType) {
        return this.client.Facilities.read({ roleType: roleType });
    }
}