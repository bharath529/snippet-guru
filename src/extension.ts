import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Extension "Console Guru" is now active!');

    const provider = vscode.languages.registerCompletionItemProvider(
        ['javascript', 'typescript'],
        {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                const linePrefix = document.lineAt(position).text.substr(0, position.character);
                if (!linePrefix.endsWith('cccl')) {
                    return undefined;
                }

                const completionItem = new vscode.CompletionItem('console.log', vscode.CompletionItemKind.Snippet);
                completionItem.insertText = new vscode.SnippetString('console.log($1);');
                completionItem.documentation = new vscode.MarkdownString('Insert console.log snippet');

                // Set a high sortText to ensure it appears at the top
                completionItem.sortText = 'AAAA';

                return [completionItem];
            }
        },
        'l' // Trigger the completion when the user types "g" after "cl"
    );

    context.subscriptions.push(provider);
}

export function deactivate() {}
