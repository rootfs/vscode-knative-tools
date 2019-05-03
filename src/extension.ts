'use strict';

import * as vscode from 'vscode';
import { KnativeExplorer } from './explorer';

export function activate(context: vscode.ExtensionContext) {
	new KnativeExplorer(context);
}

export function deactivate(): void {
	
}