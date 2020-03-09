import { useState } from 'react';

export function useModal({ callbackAfterHideForm } = {}) {

    const [form, setForm] = useState({
        isShow: false,
        data: {}
    });

    function showForm(data) {
        setForm({
            isShow: true,
            data
        });
    }

    function hideForm(isReloadData) {
        setForm({
            isShow: false,
            data: {}
        });
        callbackAfterHideForm && callbackAfterHideForm(isReloadData);
    }

    return [form, showForm, hideForm];
}