/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}

declare module '*.avif' {
    const src: string;
    export default src;
}

declare module '*.bmp' {
    const src: ImageSourcePropType;
    export default src;
}

declare module '*.gif' {
    const src: ImageSourcePropType;
    export default src;
}

declare module '*.jpg' {
    const src: ImageSourcePropType;
    export default src;
}

declare module '*.jpeg' {
    const src: ImageSourcePropType;
    export default src;
}

declare module '*.png' {
    const src: ImageSourcePropType;
    export default src;
}

declare module '*.webp' {
    const src: ImageSourcePropType;
    export default src;
}

declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >;

    const src: string;
    export default src;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.scss' {
    const content: any;
    export default content;
}

declare module '*.css' {
    const content: any;
    export default content;
}

declare module '*.mp3' {
    const src: string;
    export default src;
}

declare module '*.webm' {
    const src: string;
    export default src;
}

declare module '*.ogg' {
    const src: string;
    export default src;
}

declare module '*.pdf' {
    const src: string;
    export default src;
}

declare interface GeneralObject {
    [key: string]: any;
}

declare interface TypedObject<T> {
    [key: string]: T;
}

declare type Nullable<T> = T | null | undefined;

declare type RewriteKeysType<T extends {}, V> = {
    [key in keyof T]: V;
};
