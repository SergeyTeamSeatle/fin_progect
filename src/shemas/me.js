const featureslist = [
        "mod_service_mute_writes",
        "promoted_trend_blanks",
        "show_amp_link",
        "mweb_in_feed_refresh",
        "mweb_comments_banner",
        "is_email_permission_required",
        "mod_awards",
        "mweb_xpromo_revamp_v3",
        "mweb_xpromo_revamp_v2",
        "awards_on_streams",
        "mweb_xpromo_modal_listing_click_daily_dismissible_ios",
        "chat_subreddit",
        "cookie_consent_banner",
        "modlog_copyright_removal",
        "do_not_track",
        "mod_service_mute_reads",
        "chat_user_settings",
        "use_pref_account_deployment",
        "mweb_xpromo_interstitial_comments_ios",
        "noreferrer_to_noopener",
        "premium_subscriptions_table",
        "mweb_xpromo_interstitial_comments_android",
        "mweb_nsfw_xpromo",
        "mweb_footer_upsell",
        "mweb_sharing_web_share_api",
        "chat_group_rollout",
        "resized_styles_images",
        "spez_modal",
        "mweb_xpromo_modal_listing_click_daily_dismissible_android",
        "swap_steps_two_and_three_recalibration",
        "expensive_coins_package"
]



const featuresObj = {
    title: ' features Obj ',
    type: 'object',
    required: featureslist,
    properties: {
        mod_service_mute_writes:{
            type:"boolean"
        },
        promoted_trend_blanks:{
            type:"boolean"
        },
        show_amp_link:{
            type:"boolean"
        },
        mweb_in_feed_refresh:{
            type:"object"
        },
        mweb_comments_banner:{
            type:"object"
        },
        is_email_permission_required:{
            type:"boolean"
        },
        mod_awards:{
            type:"boolean"
        },
        mweb_xpromo_revamp_v3:{
            type:"object"
        },
        mweb_xpromo_revamp_v2:{
            type:"object"
        },
        awards_on_streams:{
            type:"boolean"
        },
        mweb_xpromo_modal_listing_click_daily_dismissible_ios:{
            type:"boolean"
        },
        chat_subreddit:{
            type:"boolean"
        },
        cookie_consent_banner:{
            type:"boolean"
        },
        modlog_copyright_removal:{
            type:"boolean"
        },
        do_not_track:{
            type:"boolean"
        },
        mod_service_mute_reads:{
            type:"boolean"
        },
        chat_user_settings:{
            type:"boolean"
        },
        use_pref_account_deployment:{
            type:"boolean"
        },
        mweb_xpromo_interstitial_comments_ios:{
            type:"boolean"
        },
        noreferrer_to_noopener:{
            type:"boolean"
        },
        premium_subscriptions_table:{
            type:"boolean"
        },
        mweb_xpromo_interstitial_comments_android:{
            type:"boolean"
        },
        mweb_nsfw_xpromo:{
            type:"object"
        },
        mweb_footer_upsell:{
            type:"object"
        },
        mweb_sharing_web_share_api:{
            type:"object"
        },
        chat_group_rollout:{
            type:"boolean"
        },
        resized_styles_images:{
            type:"boolean"
        },
        spez_modal:{
            type:"boolean"
        },
        mweb_xpromo_modal_listing_click_daily_dismissible_android:{
            type:"boolean"
        },
        swap_steps_two_and_three_recalibration:{
            type:"object"
        },
        expensive_coins_package:{
            type:"boolean"
        }
    }

}
var me = {
    title: 'schema v1 ',
    type: 'object',
    required: ["features"],
    properties: {
        features:{
            type: "object"
        },
    }
};
module.exports = me