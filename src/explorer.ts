import * as vscode from 'vscode';
import * as cli from './cli';

export class KnativeTreeDataProvider implements vscode.TreeDataProvider<KnativeObject> {

	private _onDidChangeTreeData: vscode.EventEmitter<KnativeObject | null> = new vscode.EventEmitter<KnativeObject | null>();
	readonly onDidChangeTreeData: vscode.Event<KnativeObject | null> = this._onDidChangeTreeData.event;

	constructor(private context: vscode.ExtensionContext) {
	}

	refresh(): void {
		this._onDidChangeTreeData.fire();
	}

	public async getChildren(task?: KnativeObject): Promise<KnativeObject[]> {
	
		let allObj = cli.Command.listAll();

		let objs: KnativeObject[] = [];
		return objs;
	
	}

	getTreeItem(knativeObj: KnativeObject): vscode.TreeItem {
		return knativeObj;
	}
}

class KnativeObject extends vscode.TreeItem {
	type: string;

	constructor(
		type: string, 
		label: string, 
		collapsibleState: vscode.TreeItemCollapsibleState,
		command?: vscode.Command
	) {
		super(label, collapsibleState);
		this.type = type;
		this.command = command;
	}
	 
}

export class KnativeExplorer {

	private knativeExplorer: vscode.TreeView<KnativeObject>;

	constructor(context: vscode.ExtensionContext) {
		const treeDataProvider = new KnativeTreeDataProvider(context);
		this.knativeExplorer = vscode.window.createTreeView('knativeExplorer', { treeDataProvider });
		vscode.commands.registerCommand('knative.refresh', (resource) => this.openResource(resource));
	}

	private openResource(resource: vscode.Uri): void {
		vscode.window.showTextDocument(resource);
	}
}