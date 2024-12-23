// import React from 'react';
import $ from 'jquery';

class DlabSettings {
    constructor({ typography, version, layout, navheaderBg, headerBg, sidebarStyle, sidebarBg, sidebarPosition, headerPosition, themecolor, themeBg, containerLayout, direction, primary, navigationBarImg }) {
        this.typography = typography || "Nunito";
        this.version = version || "dark";
        this.layout = layout || "vertical";
        this.navheaderBg = navheaderBg || "color_1";
        this.headerBg = headerBg || "color_1";
        this.themecolor = themecolor || "theme_1";
        this.themeBg = themeBg || "theme_1";
        this.sidebarStyle = sidebarStyle || "full";
        this.sidebarBg = sidebarBg || "color_1";
        this.sidebarPosition = sidebarPosition || "static";
        this.headerPosition = headerPosition || "static";
        this.containerLayout = containerLayout || "wide";
        this.direction = direction || "ltr";
        this.primary = primary || "color_13";
        this.navigationBarImg = navigationBarImg || '';
        this.manageTypography();
        this.manageVersion();
        this.manageLayout();
        this.manageNavHeaderBg();
        this.manageHeaderBg();
        this.manageSidebarStyle();
        this.manageSidebarBg();
        this.manageThemecolor();
        this.manageThemeBg();
        this.manageSidebarPosition();
        this.manageHeaderPosition();
        this.manageContainerLayout();
        this.manageRtlLayout();
        this.manageResponsiveSidebar();
        this.managePrimaryColor();
        this.manageNavigationBarImg();
    }

    manageVersion() {
        switch (this.version) {
            case "light":
                $('body').attr("data-theme-version", "light");
                break;
            case "dark":
                $('body').attr("data-theme-version", "dark");
                break;
            case "transparent":
                $('body').attr("data-theme-version", "transparent");
                break;
            default:
                $('body').attr("data-theme-version", "light");
        }
    }

    manageTypography() {
        switch (this.typography) {
            case "poppins":
                $('body').attr("data-typography", "poppins");
                break;
            case "roboto":
                $('body').attr("data-typography", "roboto");
                break;
            case "opensans":
                $('body').attr("data-typography", "opensans");
                break;
            case "helveticaneue":
                $('body').attr("data-typography", "helveticaneue");
                break;
            default:
                $('body').attr("data-typography", "poppins");
        }
    }

    manageLayout() {
        switch (this.layout) {
            case "horizontal":
                this.sidebarStyle === "overlay" ? $('body').attr("data-sidebar-style", "full") : $('body').attr("data-sidebar-style", `${this.sidebarStyle}`);
                $('body').attr("data-layout", "horizontal");
                break;
            case "vertical":
                $('body').attr("data-layout", "vertical");
                break;
            default:
                $('body').attr("data-layout", "vertical");
        }
    }

    manageNavHeaderBg() {
        switch (this.navheaderBg) {
            case "color_1":
                $('body').attr("data-nav-headerbg", "color_1");
                break;
            case "color_2":
                $('body').attr("data-nav-headerbg", "color_2");
                break;
            case "color_3":
                $('body').attr("data-nav-headerbg", "color_3");
                break;
            case "color_4":
                $('body').attr("data-nav-headerbg", "color_4");
                break;
            case "color_5":
                $('body').attr("data-nav-headerbg", "color_5");
                break;
            case "color_6":
                $('body').attr("data-nav-headerbg", "color_6");
                break;
            case "color_7":
                $('body').attr("data-nav-headerbg", "color_7");
                break;
            case "color_8":
                $('body').attr("data-nav-headerbg", "color_8");
                break;
            case "color_9":
                $('body').attr("data-nav-headerbg", "color_9");
                break;
            case "color_10":
                $('body').attr("data-nav-headerbg", "color_10");
                break;
            case "color_11":
                $('body').attr("data-nav-headerbg", "color_11");
                break;
            case "color_12":
                $('body').attr("data-nav-headerbg", "color_12");
                break;
            default:
                $('body').attr("data-nav-headerbg", "color_1");
        }
    }

    manageHeaderBg() {
        switch (this.headerBg) {
            case "color_1":
                $('body').attr("data-headerbg", "color_1");
                break;
            case "color_2":
                $('body').attr("data-headerbg", "color_2");
                break;
            case "color_3":
                $('body').attr("data-headerbg", "color_3");
                break;
            case "color_4":
                $('body').attr("data-headerbg", "color_4");
                break;
            case "color_5":
                $('body').attr("data-headerbg", "color_5");
                break;
            case "color_6":
                $('body').attr("data-headerbg", "color_6");
                break;
            case "color_7":
                $('body').attr("data-headerbg", "color_7");
                break;
            case "color_8":
                $('body').attr("data-headerbg", "color_8");
                break;
            case "color_9":
                $('body').attr("data-headerbg", "color_9");
                break;
            case "color_10":
                $('body').attr("data-headerbg", "color_10");
                break;
            case "color_11":
                $('body').attr("data-headerbg", "color_11");
                break;
            case "color_12":
                $('body').attr("data-headerbg", "color_12");
                break;
            default:
                $('body').attr("data-headerbg", "color_1");
        }
    }

    manageSidebarStyle() {
        $('body').attr("data-sidebar-style", this.sidebarStyle);
    }

    manageSidebarBg() {
        $('body').attr("data-sidebarbg", this.sidebarBg);
    }

    manageThemecolor() {
        $('body').attr("data-themecolor", this.themecolor);
    }

    manageThemeBg() {
        $('body').attr("data-themebg", this.themeBg);
    }

    manageSidebarPosition() {
        $('body').attr("data-sidebar-position", this.sidebarPosition);
    }

    manageHeaderPosition() {
        $('body').attr("data-header-position", this.headerPosition);
    }

    manageContainerLayout() {
        $('body').attr("data-container-layout", this.containerLayout);
    }

    manageRtlLayout() {
        $('body').attr("data-rtl", this.direction === "rtl" ? "true" : "false");
    }

    manageResponsiveSidebar() {
        $('body').attr("data-responsive", this.sidebarStyle === "overlay" ? "true" : "false");
    }

    managePrimaryColor() {
        $('body').attr("data-primary", this.primary);
    }

    manageNavigationBarImg() {
        if (this.navigationBarImg) {
            $('body').attr("data-navbar-img", this.navigationBarImg);
        }
    }
}

export default DlabSettings;
