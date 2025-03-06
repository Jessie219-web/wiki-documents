---
description: This page introduces how to deploy generative AI technologies on reComputer devices using the Nvidia Jetson platform, including text generation, image generation, audio generation, multimodal generation, and retrieval-augmented generation. It details the application scenarios, technical features, and relevant resource links for each technology, providing developers with comprehensive reference materials and technical support information.
title: Generative AI with reComputer-Jetson®
keywords:
  - Edge
  - reComputer 
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Generative_AI_Intro
last_update:
  date: 08/06/2024
  author: Youjiang
---

<div style={{textAlign:'center'}}>
    <a href="https://github.com/Seeed-Projects/jetson-examples">
        <img src="https://files.seeedstudio.com/wiki/reComputer/deploy-genai-on-jetson.png" style={{width:800, height:'auto'}}/>
    </a>
</div>

La [**IA generativa**](https://www.seeedstudio.com/edge-ai/generative-ai) es una tecnología de inteligencia artificial que puede generar nuevos datos, como imágenes, texto o audio, habiendo aprendiendo de datos existentes. La **Nvidia Jetson** es una plataforma de IA de vanguardia desarrollada por NVIDIA, que presenta capacidades de procesamiento de alto rendimiento y un diseño de bajo consumo, adecuada para varios dispositivos integrados y de IoT. Admite aprendizaje profundo, visión por computadora y otras aplicaciones de inteligencia artificial, y ofrece potentes capacidades informáticas y un amplio conjunto de herramientas de desarrollo. La combinación de Generative AI y Jetson permite una generación e inferencia local eficiente en tiempo real en dispositivos de computo en el borde.

## Generación de texto

La generación de texto es una tecnología que utiliza el aprendizaje profundo y un LLM para generar texto en lenguaje natural. Estos modelos se entrenan en conjuntos de datos masivos, lo que les permite aprender el vocabulario, la gramática y la estructura semántica del lenguaje. Pueden producir textos fluidos y coherentes, no solo limitándose a responder preguntas o entablar conversaciones, sino que también incluyen tareas como escribir artículos, crear historias, generar código y traducir idiomas. Aquí, estamos implementando algoritmos de generación de texto en la Jetson para crear nuestro propio chatbot local.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Asistente local con IA</font></th>
            <th class="table-trnobg"><font size={"4"}>Chatbot con voz local</font></th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/Local_Voice_Chatbot/workflow.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Configura una base de conocimientos local sobre dispositivos Jetson con ollama y AnythingLLM.</font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}>Creación de un chatbot de voz operado localmente con Nvidia Riva y Meta Llama2.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/local_ai_ssistant/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Leer más</font></span></strong></a></div></td>
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Local_Voice_Chatbot/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Leer más</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Generación de imágenes

La generación de imágenes, mediante la interpretación de las descripciones de texto de entrada, permite a los modelos producir imágenes de alta calidad que coincidan con las descripciones. Esta tecnología tiene amplias aplicaciones en campos como la creación artística, el diseño publicitario y el desarrollo de juegos, permitiendo la generación automatizada de contenido visual que satisfaga las necesidades del usuario.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Ejecuta un texto a imagen mediante un LLM local</font></th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/Nvidia_Jetson_recomputer_LLM_texto-to-image/28_dreamshaperxl_image_result.png" style={{width:300, height:'300'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Implementa el modelo de generación de imágenes en la Jetson y evalúa su rendimiento de inferencia.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/How_to_run_local_llm_text_to_image_on_reComputer/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Leer más</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Generación de audio

La generación de audio puede producir audio realista y de alta calidad, incluido habla, música y efectos de sonido, utilizando redes neuronales. Al entrenarse con extensos conjuntos de datos, estos modelos aprenden a replicar patrones y matices de sonido naturales, lo que permite aplicaciones como síntesis de voz, composición musical automatizada y creación de efectos de sonido.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg"><font size={"4"}>Generación de subtítulos de voz</font></th>
            <th class="table-trnobg"><font size={"4"}>Implementar Whisper en la NVIDIA Jetson Orin</font></th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recoder.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Real-Time-Whisper.gif" style={{width:300, height:'300'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}><font size={"2"}>  Generación de voz a subtítulos en la Jetson, que puede ofrecer servicios de voz a subtítulos en tiempo real y al mismo tiempo evitar la fuga de información a Internet. </font></td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px' }}><font size={"2"}> Implementación de Whisper en la Jetson Orin para crear aplicaciones STT sólidas y eficientes.</font></td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Real%20Time%20Subtitle%20Recoder%20on%20Nvidia%20Jetson/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Leer más</font></span></strong></a></div></td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Edge/NVIDIA_Jetson/Application/Generative_AI/Whisper_on_Jetson_for_Real_Time_Speech_to_Text/"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Leer más</font></span></strong></a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Generación multimodal

La tecnología de generación multimodal combina varias formas de datos, como texto, imágenes y sonido, para crear contenido que integra múltiples tipos de información. Esta tecnología utiliza modelos de aprendizaje profundo para procesar y fusionar datos de diferentes modalidades, lo que da como resultado contenidos más expresivos y diversos. Por ejemplo, los modelos de texto a imagen pueden generar imágenes correspondientes basadas en descripciones textuales, mientras que los modelos de síntesis de voz pueden producir voz a partir de texto y generar simultáneamente imágenes relacionadas. La generación multimodal muestra amplias perspectivas de aplicación en realidad virtual, realidad aumentada y creación de contenidos multimedia.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Ejecutar un VLM en la reComputer</font>
            </th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/vlm/vlmgif.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}>  Esta wiki proporciona un tutorial sobre cómo ejecutar VLM en la reComputer J4012 Jetson Orin NX con Jetson Platform Services. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/run_vlm_on_recomputer/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Leer más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Generación Mejorada por Recuperación (RAG: Retrieval Augmented Generation)

RAG (Retrieval-Augmented Generation) es una tecnología que combina mecanismos de recuperación con modelos de generación. El modelo RAG no sólo utiliza un modelo generativo para producir respuestas, sino que también incorpora técnicas de recuperación de información para mejorar la precisión y riqueza del contenido generado mediante la recuperación de información relevante de grandes bases de datos. Esta tecnología destaca en aplicaciones como sistemas de respuesta a preguntas, búsqueda inteligente y generación de contenidos. Al aprovechar la información recuperada, los modelos RAG pueden generar respuestas más detalladas y ricas en información, mejorando así la calidad y relevancia del contenido generado.

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Asistente local con IA</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>RAG Local con LlamaIndex</font>
            </th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Configura una base de conocimientos local sobre dispositivos Jetson con ollama y AnythingLLM. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Con este proyecto RAG local, puedes proteger la privacidad de tus datos y tener una experiencia de comunicación de baja latencia. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/local_ai_ssistant/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Leer más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Local_RAG_based_on_Jetson_with_LlamaIndex/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Leer más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>

## Otros

<div class="table-center">
    <table class="table-nobg">
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Ajuste fino de LLM para la Jetson</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>LLM cuantizado con MLC</font>
            </th>
            <th class="table-trnobg">
                <font size={"4"}>Detección de objetos de disparo cero</font>
            </th>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/zero_shot_detection/fig1.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Implementa Llama-Factory en la Nvidia Jetson y utiliza Llama-Factory para entrenar un LLM. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Implementación del Llama2-7B cuantificado con MLC LLM en la Jetson Orin NX. </font>
            </td>
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> El servicio de IA de detección de disparo cero expone los puntos finales de la API REST para controlar la entrada de flujo y los objetos a detectar. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Finetune_LLM_on_Jetson/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Leer más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Leer más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/run_zero_shot_detection_on_recomputer/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Leer más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <th class="table-trnobg">
                <font size={"4"}>Formato de salida con Langchain</font>
            </th>    
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div style={{textAlign:'center'}}>
                    <img src="https://files.seeedstudio.com/wiki/reComputer/Application/Format_LLM_Opt/format_llm_opt.gif" style={{width:300, height:'auto'}}/>
                </div>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td className="table-trnobg" style={{ textAlign: 'justify', width: '300px'}}>
                <font size={"2"}> Utiliza Langchain para dar formato a la salida de LLM's e implementarlos en dispositivos informáticos de vanguardia. </font>
            </td>
        </tr>
        <tr class="table-trnobg"></tr>
        <tr class="table-trnobg">
            <td class="table-trnobg">
                <div class="get_one_now_container" style={{textAlign: 'center'}}>
                    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/How_to_Format_the_Output_of_LLM_Using_Langchain_on_Jetson/">
                        <strong>
                            <span>
                                <font color={'FFFFFF'} size={"4"}>📚 Leer más</font>
                            </span>
                        </strong>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>


## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
    <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
    <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
    <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
    <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


