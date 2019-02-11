import React, { Component, Fragment } from 'react';
import uuid from 'uuid';
import Controls from './components/controls/controls.jsx';
import Notepad from './components/notepad/notepad.jsx';
import Tabs from './containers/tabs.jsx';
import getLastEdited from './utils/get-last-edited-time.js';
import markItemAsInactive from './utils/mark-item-as-inactive.js';


class App extends Component {

    state = {
        tabs: [
            {
                id: uuid(),
                title: 'Personal',
                notes: [],
                isActive: true,
            },
            {
                id: uuid(),
                title: 'Work',
                notes: [],
                isActive: false,
            },
            {
                id: uuid(),
                title: 'Other',
                notes: [],
                isActive: false,
            },
        ],
        notes: []
    }

    get activeTabId() {
        const activeTab = this.state.tabs.find(tab => tab.isActive);
        return activeTab.id;
    }

    get activeNote() {
        return this.state.notes.find(note => note.isActive) || {};
    }

    handleAddNote = (content = '') => this.setState(({ notes, tabs }) => {
        const lastEdited = getLastEdited();
        const newNote = {
            id: uuid(),
            content,
            lastEdited: lastEdited.printed,
            lastEditedRaw: lastEdited.raw,
            isActive: true,
            tabId: this.activeTabId,
        };
        return {
            tabs: tabs.map(tab => tab.id !== this.activeTabId ? tab : ({
                ...tab,
                notes: tab.notes.concat([newNote.id]),
            })),
            notes: notes.map(markItemAsInactive).concat([newNote]),
        };
    });

    handleDeleteNote = () => this.setState(({ notes, tabs }) => ({
        tabs: tabs.map(tab => ({ ...tab, notes: tab.notes.filter(noteId => noteId !== this.activeNote.id) })),
        notes: notes.filter(note => note.id !== this.activeNote.id),
    }));

    handleUpdateNoteContent = (id, content = '') => this.setState(({ notes }) => {
        const lastEdited = getLastEdited();
        return {
            notes: notes.map(note => note.id !== id ? note : ({
                ...note,
                content,
                lastEdited: lastEdited.printed,
                lastEditedRaw: lastEdited.raw,
            }))
        };
    });

    handleSetActiveNote = (noteId, isActive) => () => !isActive && this.setState(({ notes }) => ({
        notes: notes.map(note => ({
            ...note,
            isActive: note.id === noteId
        }))
    }));

    handleSetActiveTab = (tabId) => () => this.setState(({ tabs }) => ({
        tabs: tabs.map(tab => ({
            ...tab,
            isActive: tab.id === tabId,
        }))
    }));

    render() {
        return (
            <Fragment>
                <div className="main__controls">
                    <Controls
                        onAddNote={this.handleAddNote}
                        onDeleteNote={this.handleDeleteNote}
                    />
                </div>
                <div className="main__body">
                    <Tabs
                        onSetActiveTab={this.handleSetActiveTab}
                        onSetActiveNote={this.handleSetActiveNote}
                    />
                    <Notepad
                        {...this.activeNote}
                        onAddNote={this.handleAddNote}
                        onUpdateNoteContent={this.handleUpdateNoteContent}
                    />
                </div>
            </Fragment>
        );
    }
};

export default App;
