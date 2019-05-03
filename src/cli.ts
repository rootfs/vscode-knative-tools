import * as cp from 'child_process';

export const Command = {
    listAll: () => {
        const cmd = `kubectl get service.serving.knative.dev,build.build.knative.dev -o=jsonpath="{range .items[*]}{.kind}{'\\t'}{.metadata.name}{'\\n'}{end}"`;
        cp.exec(cmd, null, (error: cp.ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => {
            
        });
    }

};