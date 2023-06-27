import React, {useState, useEffect} from "react";
import classes from "../LogOut/LogOut.module.css";
import Select from "react-select";
import "./AddContent.css";
import axios from "axios";
import {toast} from "react-toastify";
import {HandleResponse} from "../../pages/utils";

function getDomainsForOptions() {
    let domains = []
    axios.get("http://127.0.0.1:8000/api/v2/getDomains?onlyNames=true").then(function (resp) {
        for (let i = 0; i < resp.data.length; i++) {
            domains.push({
                value: resp.data[i],
                label: resp.data[i],
            })
        }
    })
    return domains
}

function getTemplatesForOptions() {
    let tempTemplates = []
    axios.get("http://127.0.0.1:8000/api/v2/getTemplates").then(function (resp) {
        for (let i = 0; i < resp.data.length; i++) {
            tempTemplates.push({
                label: resp.data[i].name,
                value: resp.data[i].imgURL
            })
        }
    })
    return tempTemplates
}


function AddContent({setAddContentToggle, GetUrl}) {
    const [domains, setDomains] = useState([]);

    const cloackingOptions = [
        {value: "Enable", label: "Enable"},
        {value: "Disable", label: "Disable"},
    ];
    const cloackingTypeOptions = [
        {value: "Redirect to white page", label: "Redirect to white page"},
        {value: "Error 404 on white page", label: "Error 404 on white page"},
    ];
    const [templates, setTemplates] = useState([
        {value: "Lens (Smart contract)", label: "Lens (Smart contract)"},
    ]);

    const [blacktds, setBlacktds] = useState(false);
    const [blacktds2, setBlacktds2] = useState(false);
    const [textarea, setTextarea] = useState(false);
    const [_templateImgUrl, _setTemplateImgUrl] = useState("")
    
    useEffect(() => {
        setDomains(getDomainsForOptions())
        setTemplates(getTemplatesForOptions)
    }, [])

    const handleSetImgUrl = e => {
        _setTemplateImgUrl(e.value)
  };

    const BlackTdsClickHandler = (e) => {
        setBlacktds(e.value === "Enable");
        if (e.value !== "Enable") {
            setBlacktds2(false);
        }
    };
    const TextAreaClickHandler = (e) => {
        setTextarea(e.value === "Enable");
    };
    const Options2ClickHandler = (e) => {
        setBlacktds2(e.value === "Redirect to white page");
    };

    return (
        <div
            className={`${classes.AddContent}  ${classes.AddContentLinks}`}
        >
            <div
                className={classes.close}
                onClick={() => {
                    setAddContentToggle(false);
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18 6L6 18"
                        stroke="#999CB1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6 6L18 18"
                        stroke="#999CB1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <h2>Header example</h2>

            <p className={classes.topP}>Subtext example</p>
            <div>
                <form>
                    <label htmlFor="exampleWebsite">Text example</label>
                    <div className={classes.inputs}>
                        <div className={classes.input}>
                            <div className={classes.Language}>
                                <Select options={domains} className={classes.SelectCss}/>
                            </div>
                        </div>

                        <div className={`${classes.input} ${classes.inputSpan}`}>
                            <span className={classes.spanAbsolute}>.</span>
                            <input type="text" placeholder="Example.com"/>
                        </div>
                    </div>
                    <div className={classes.accordion}>
                        <div className={`${classes.inputs} ${classes.DrowdownBottom}`}>
                            <div className={classes.input}>
                                <label htmlFor="">Cloaking (blacktds)</label>
                                <div className={classes.Language}>
                                    <Select
                                        options={cloackingOptions}
                                        onChange={(e) => BlackTdsClickHandler(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        {blacktds && (
                            <div className={`${classes.inputs} ${classes.DrowdownBottom}`}>
                                <div className={classes.input}>
                                    <label htmlFor="">Choose the type of cloaking</label>
                                    <div className={classes.Language}>
                                        <Select
                                            options={cloackingTypeOptions}
                                            onChange={(e) => Options2ClickHandler(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        {blacktds2 && blacktds ? (
                            <div className={`${classes.inputs} ${classes.DrowdownBottom}`}>
                                <div className={classes.input}>
                                    <label htmlFor="">Enter the link to the white page</label>
                                    <div className={classes.Language}>
                                        <input
                                            type="text"
                                            name=""
                                            placeholder="Link to white page"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <>
                        <div className={`${classes.inputs} ${classes.DrowdownBottom}`}>
                            <div className={classes.input}>
                                <label htmlFor="">
                                    Advanced settings (here you can add your own code to the template's html)
                                </label>
                                <div className={classes.Language}>
                                    <Select
                                        options={cloackingOptions}
                                        onChange={(e) => TextAreaClickHandler(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        {textarea && (
                            <div className={classes.textarea}>
                                <label htmlFor="textarea">
                                    Enter your code that will be in the template
                                </label>
                                <textarea id="textarea" placeholder="Code"></textarea>
                            </div>
                        )}
                    </>
                    <div className={`${classes.inputs} ${classes.DrowdownBottom}`}>
                        <div className={classes.input}>
                            <label htmlFor="">Changing the template</label>
                            <div className={classes.Language}>
                                <Select options={templates} id={"selectTemplates"} onChange={handleSetImgUrl}/>
                            </div>
                        </div>
                    </div>
                    <>
                        <div className={classes.fileUploader}>
                            <label htmlFor="imageSpace" className={classes.imageSpace}>
                                <img className={classes.imageSpace} id="imageSpace" src={_templateImgUrl}></img>
                            </label>
                            {/*<input type="file" name="" id="imageSpace"/>*/}

                        </div>
                        <div className={classes.checkboxDiv}>
                            <input type="checkbox" id="checkBox"/>
                            <label htmlFor="checkBox" className={classes.check}>
                                <div className={classes.checked}>
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 4.5L6.75 12.75L3 9"
                                            stroke="#0A0B10"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </label>
                            <label htmlFor="checkBox"> Checkbox example</label>
                        </div>
                    </>
                </form>
                <div className={classes.buttons}>
                    <button>Save</button>
                    <button
                        onClick={() => {
                            setAddContentToggle(false);
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddContent;
