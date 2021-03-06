import {Button, Layout, Menu, Upload, message, Row, Col, Modal} from "antd";
import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "type/state";
import {actions} from "../index";

import "./header.less";

interface Props {
    hasImported: boolean;
    importJSON: (file?: File) => void;
    exportJSON: (columnName?: string) => void;
}

const Header: React.FunctionComponent<Props> = ({hasImported, importJSON, exportJSON}) => {
    return (
        <Layout.Header className="header-header">
            {/* <Row justify="end" gutter={20} style={{padding: "0 20px"}}>
                <Col>
                    <Upload
                        action=""
                        accept=".json"
                        showUploadList={false}
                        beforeUpload={file => {
                            if (file) {
                                Modal.confirm({
                                    content: "Import new json will reset existed!",
                                    onOk() {
                                        importJSON(file);
                                    },
                                    onCancel() {
                                        return false;
                                    },
                                })
                            }
                            return false;
                        }}
                    >
                        <Button type="primary">Import</Button>
                    </Upload>
                </Col>
                <Col>
                    <Button disabled={!hasImported} type="primary" danger onClick={() => exportJSON()}>
                        Export
                    </Button>
                </Col>
                <Col>
                    <Button disabled={!hasImported} type="ghost">
                        Reset
                    </Button>
                </Col>
            </Row> */}
        </Layout.Header>
    );
};

const mapStatsToProps = (state: RootState) => {
    const {mergeLanguageList, languageList, columns} = state.app.home;
    const hasImported = !!mergeLanguageList.length;
    return {
        hasImported,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => ({
    importJSON: (file?: File) => dispatch(actions.importJSON(file)),
    exportJSON: (columnName?: string) => dispatch(actions.exportJSON(columnName)),
});
export default connect(mapStatsToProps, mapDispatchToProps)(Header);
