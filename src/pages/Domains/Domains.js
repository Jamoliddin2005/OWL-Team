import React from "react";
import classes from "./Domain.module.css";
import { Link } from "react-router-dom";

function Domains({ toggle }) {

    const domains = [
        {
            id: 2451,
            domain: "boredarmy.net",
            NS: [
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
            ],
            google: true,
            Status: true,
            date: "2023.06.02 4:27"
        },
        {
            id: 2451,
            domain: "boredarmy.net",
            NS: [
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
            ],
            google: true,
            Status: true,
            date: "2023.06.02 4:27"
        },
        {
            id: 2451,
            domain: "boredarmy.net",
            NS: [
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
            ],
            google: true,
            Status: true,
            date: "2023.06.02 4:27"
        },
        {
            id: 2451,
            domain: "boredarmy.net",
            NS: [
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
            ],
            google: true,
            Status: true,
            date: "2023.06.02 4:27"
        },
        {
            id: 2451,
            domain: "boredarmy.net",
            NS: [
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
            ],
            google: true,
            Status: true,
            date: "2023.06.02 4:27"
        },
        {
            id: 2451,
            domain: "boredarmy.net",
            NS: [
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
                {
                    name: "laylah.ns.cloudflare.com"
                },
            ],
            google: true,
            Status: true,
            date: "2023.06.02 4:27"
        },
    ]


    return (
        <div className={classes.classes}>
            <div className={toggle ? "container_On" : "container_Off"}>
                <div className={classes.LogsList}>
                    <div className={classes.header}>
                        <h3>Domains list</h3>
                        <div className={classes.header_right_bttons}>
                            <button>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM9 14C8.44771 14 8 13.5523 8 13V10H5C4.44772 10 4 9.55229 4 9C4 8.44771 4.44772 8 5 8H8V5C8 4.44771 8.44771 4 9 4C9.55228 4 10 4.44771 10 5V8H13C13.5523 8 14 8.44771 14 9C14 9.55229 13.5523 10 13 10H10V13C10 13.5523 9.55229 14 9 14Z" fill="#0A0B10" />
                                </svg>

                                Add new</button>
                        </div>
                    </div>
                    <div className={classes.section}>
                        <div className={classes.navbar}>
                            <div className={classes.LinksAndOthers}>
                                <div className={classes.ID}>
                                    <span>ID</span>
                                </div>
                                <div className={classes.Link}>
                                    <span>Domain</span>
                                </div>
                                <div className={classes.chainName}>
                                    <h4>NS</h4>
                                </div>
                                <div className={classes.Amount}>
                                    <h4>
                                        Google Ban
                                    </h4>
                                </div>
                                <div className={classes.Date}>
                                    <span> Date</span>
                                </div>
                                <div className={classes.status}>
                                    <span>Status</span>
                                </div>
                            </div>

                        </div>
                        <div className={classes.products}>
                            {
                                domains.map((item, index) => (
                                    <div className={classes.product} key={index}>
                                        
                                    </div>
                                ))
                            }
                        </div>
                        <div className={classes.showBtn}>
                            <Link to={"/logs"}>Show more logs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Domains;
